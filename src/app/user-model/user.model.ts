export class User {

    id: number
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phone: number;
    address: string;
    salary: number;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.firstName = obj && obj.firstName || '';
        this.lastName = obj && obj.lastName || '';
        this.userName = obj && obj.userName || '';
        this.email = obj && obj.email || '';
        this.phone = obj && obj.phone || null;
        this.address = obj && obj.address || '';
        this.salary = obj && obj.salary || null;
    }

}