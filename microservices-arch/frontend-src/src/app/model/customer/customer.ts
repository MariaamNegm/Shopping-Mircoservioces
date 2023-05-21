import { Notifications } from '../notifications/notifications';

export class Customer {

    public  id?: number;
    public  username?: string;
    public  password?: string;
    public  location?: string;
    public  loggedin?: boolean;
    public notifications?: Notifications[];

}
