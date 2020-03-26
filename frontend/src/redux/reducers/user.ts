import { handleActions } from 'redux-actions';
import { IUser } from '../../types';
import { UserActions } from '../actions';

const initialState = {
    email:"VovaCivic@gmail.com",
    pass:"Vova",
    newText:"text"
};
console.log([UserActions.Type.SET_USER])

export const UserReducer = handleActions<IUser | null, IUser>({

    [UserActions.Type.SET_USER]: (state, action) => action.payload,
    // [UserActions.Type.SET_LOGIN]:(state,action) => ({
    //     ...state,
    //     newText: action.
    // }),
}, initialState);