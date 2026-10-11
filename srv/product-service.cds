using { sap.cap.productshop as my } from '../db/schema';

service productshop
{
    //@odata.draft.enabled
    entity product as
        projection on my.Product
        actions
        {
            action orderproduct
            (
               // @title : 'Product Name'
                //name : String,
                @title : 'Stock'
                stock : Integer
            );

            action fingerprint
            (
                username : String
            );

            action createpo
            (
                name : String
            );
        };

    entity Supplier as
        projection on my.Supplier;

    function MyFunction
    (
        name : String
    )
    returns String;

    action MyAction
    (
        name : String
    )
    returns String;
}

//annotate productshop with @(requires: 'productmanager');
