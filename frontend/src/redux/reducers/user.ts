import { handleActions } from 'redux-actions';
import { IUser } from '../../types';
import { UserActions } from '../actions';

const initialState = {
    email:"VovaCivic@gmail.com",
    pass:"Vova",
    newText:"text"
};

console.log( [UserActions.Type.SET_USER]);
export const UserReducer = handleActions<IUser | null, IUser>({
    [UserActions.Type.SET_USER]: (state, action) => action.payload,

}, initialState);

// https://qna.habr.com/q/694166
//     https://github.com/redux-utilities/redux-actions/issues/282