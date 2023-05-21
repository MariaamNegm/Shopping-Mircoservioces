import { Order } from "../order/order";

export class Product {

    public  product_id?: number;
    public  name?: string;
    public  image?: string;
    public  quantity?: number;
    public  price?: number;
    public orderSet?: Order[];
}
