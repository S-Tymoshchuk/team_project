export interface ISocialAuthCOde {
    provider: string
    code: string
}

export interface IAccessToken {
    token: string
}

export interface IAuthId {
    id: string
    token: string
}
export interface IUserLinkedin {
    firstName:string,
    lastName:string
    provider:string
}

export interface ISocial {
    linkedin: IUserLinkedin
}
