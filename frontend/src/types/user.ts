export interface IAddress {
  country: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  timeZone: string;
  avatar: string;
}

export interface IisFetching {
  isFetching: boolean;
}

export interface IState {
  isFetching: boolean;
  user: IUser | null;
}
