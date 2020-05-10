import {IUser, IUserInt} from "../../types";
import {IAuth} from "../../types/auth";
import {IAttachment} from "../../types/attachment";
import {IPost} from "../../types/post";
import { ISocial } from "../../types/social";

export interface IRootReducer {
  router: any;
  user: IUserInt;
  auth: IAuth;
  attachment: IAttachment;
  post: IPost[],
  social:ISocial
}
