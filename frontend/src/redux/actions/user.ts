import { createAction } from "redux-actions";
import { IUser, IisFetching } from "../../types";

enum Type {
  SET_USER = "SET_USER",
  GET_USER = "GET_USER",
  FETCHING_USER = "FETCHING_USER",
}

const setUser = createAction<IUser>(Type.SET_USER);
const getUser = createAction<IUser>(Type.GET_USER);
const fetchingUser = createAction<IisFetching>(Type.FETCHING_USER);

export const UserActions = {
  Type,
  getUser,
  fetchingUser,
  setUser,
};

export type UserActions = Omit<typeof UserActions, "Type">;
