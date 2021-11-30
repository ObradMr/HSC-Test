export class User {

    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phone: number;
    address: string;
    salary: number;

    constructor(obj?: any) {
        this.firstName = obj && obj,this.firstName || '';
        this.lastName = obj && obj.lastName || '';
        this.userName = obj && obj.userName || '';
        this.email = obj && obj.email || '';
        this.phone = obj && obj.phone || null;
        this.address = obj && obj.address || '';
        this.salary = obj && obj.salary || null;
    }

}