export interface IAddress {
    country: string;
    city: string;
    addressLine1: string;
    addressLine2: string;
}

export interface IUser {
    email: string;
    pass: string;
    newText: any;
    counter:any;
    amount:any
    // status: string;
    // avatar: string;
    // lastName: string;
    // firstName: string;
    // gender: string;
    // address: IAddress;
    // profession: string;
    // phone: string;
    // roles: Array<string>;
}

export interface ILogin {
    email:string,
    password:string
    
}
