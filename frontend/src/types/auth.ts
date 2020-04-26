export interface IAuth {
    accessToken: string
}

export interface ILogin {
    email: string;
    password: string;
}


export interface ISignUp {
    firstName: string;
    email: string;
    password: string;
}

export interface IForgot {
    email: string;
}

