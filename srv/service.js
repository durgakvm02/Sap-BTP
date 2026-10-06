const cds = require('@sap/cds');

module.exports = cds.service.impl(async function (srv) {
    srv.on('printhelloworld', req => {
        console.log(req.data.input)
        return `${req.data.input} World`
    })
    srv.on('addition',req =>{
        console.log(req.data)
        let result = req.data.num1 + req.data.num2;
        return result
    })

    srv.on('myFunction',req => {
        let result = {}
        if (req.data.category == 1) {
            result.product = 'BMW',
            result.price = '1200 USD',
            result.location = 'New Delhi'
        } else {
             result.product = 'AUDI',
             result.stock = 120,
             result.priceArray = [
                {
                     "price": 47457,
                     "discount": "20 %"
                }
            ]
            
        }
        console.log(result)
        return result;
    } )
})
