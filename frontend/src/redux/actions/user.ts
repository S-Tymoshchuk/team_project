import { createActions } from 'redux-actions';
import { IUser } from '../../types';

enum Type {
    SET_USER = 'SET_USER',
    SET_LOGIN_AND_PASS="SET_LOGIN_AND_PASS",
    INCREMENT="INCREMENT",
    DINCREMENT="DINCREMENT"
}

// const setUser = createAction<IUser>(Type.SET_USER,);
// const increment = createAction<IUser>(Type.INCREMENT);
// const dincrement = createAction<IUser>(Type.DINCREMENT);

const { increment, decrement } = createActions({
    INCREMENT: (name,pass) => ({ name,pass }),
    DINCREMENT: (amount = 1) => ({ amount: -amount })
});

export const UserActions = {
    Type,
    increment,
    // setUser,
    // dincrement
}

export type UserActions = Omit<typeof UserActions, 'Type'>;



