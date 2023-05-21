import { Customer } from "../customer/customer";
import { Shippingcompany } from "../shippingcompany/shippingcompany";

export class Order {

    public  order_id?: number;
    public  name?: string;
    public  customer?: Customer;
    public  location?: string;
    public  shippied?: boolean;
    public  ship?: Shippingcompany;
}
