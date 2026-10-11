
const cds = require('@sap/cds');
const { message } = require('@sap/cds/lib/log/cds-error');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');
const { UPDATE } = require('@sap/cds/lib/ql/cds-ql');

module.exports = cds.service.impl(async function (srv) {

    const { product } = srv.entities;
    let originalstock;
    let ID;

    //srv.on('READ','product', async (req) => {
    //   console.log("<<i am in `ON` Handler")
    //})

    //srv.after('READ','product', async (req) => {
    //  console.log("<<i am in `AFTER` Handler")
    //})

    //srv.before('READ','product', async (req) => {
    //  console.log("<<i am in `BEFORE` Handler")
    //})

    srv.on('MyFunction', async (req) => {
        let result = `Super Cool ${req.data.name}`;
        return result;
    });

    srv.on('MyAction', async (req) => {
        let result = `Super Cool ${req.data.name}`;
        return result;
    });

    srv.before('orderproduct', async (req) => {
        console.log(req.data);
        console.log(req.params);
        ID = req.params[0];

        const result = await SELECT.one
            .from(product)
            .columns('stock')
            .where({ ID: req.params[0].ID });

        originalstock = result.stock;

        console.log("<<originalstock", originalstock);

        let updatestock = Number(req.data.stock) + Number(originalstock);

        //console.log("<<updated stock", updatestock);

        if (updatestock > 500) {
            return req.error(400, 'Stock should not be greater than 500');
        }
    });

    srv.on('orderproduct', async (req) => {
        let updatestock = Number(req.data.stock) + Number(originalstock);
        console.log("<<updated stock", updatestock);

        const result = await UPDATE(product)
            .set({ stock: updatestock })
            .where({ ID: ID.ID });

        console.log("Updated query result:", result);
        
       return req.notify(`Order placed! Updated stock is now ${updatestock}`)

    });

});
