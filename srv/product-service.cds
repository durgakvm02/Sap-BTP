using {sap.cap.productshop as my} from '../db/scheme';

service productshop {
    entity product  as projection on my.Product;

    entity Supplier as projection on my.Supplier;
}
