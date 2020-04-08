import { handleActions } from 'redux-actions';
import { IUser } from '../../types';
import { UserActions } from '../actions';
// import {setUser} from "./../actions/user";

const initialState = {
    email:"VovaCivic@gmail.com",
    pass:"Vova",
    newText:"text",
    counter: "0"
};

export const UserReducer = handleActions(
    {
        // @ts-ignore
        [UserActions.Type.INCREMENT]:  (state, { payload: { name,pass} }) => ({...state, counter:  name+pass}),
        // [UserActions.Type.DINCREMENT]: state => ({ ...state, counter: state.counter -1 }),
        // [UserActions.Type.INCREMENT]: (state, { payload: { amount:number } }) => {
        //     return { ...state, counter: state.counter + amount };
        // },
        // [UserActions.Type.DINCREMENT]: (state, { payload: { amount } }) => {
        //     return { ...state, counter: state.counter + amount };
        // }
    },
    initialState
);

