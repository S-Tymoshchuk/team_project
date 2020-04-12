import { handleActions } from "redux-actions";
import { IState } from "../../types";
import { IUser } from "../../types";
import { UserActions } from "../actions";

const initialState: IState = {
  isFetching: false,
  user: null as IUser | null,
};

export const UserReducer = handleActions(
  {
    //fetch from/to server
    [UserActions.Type.SET_USER]: (state, action) => action.payload,
    //set User in State
    [UserActions.Type.SET_USER]: (state, action) => action.payload,
  },
  initialState
);
