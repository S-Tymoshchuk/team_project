import { IUser, IAuth } from "../../types";

export interface IRootReducer {
  router: any;
  user: IUser;
  auth: IAuth;
}
