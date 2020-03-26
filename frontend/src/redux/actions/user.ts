/* eslint-disable @typescript-eslint/no-namespace */
import { createAction } from 'redux-actions';
import { IUser } from '../../types';

enum Type {
    SET_USER = 'SET_USER',
    SET_LOGIN = 'SET_LOGIN'
}

const setUser = createAction<IUser>(Type.SET_USER);
const setLogin = createAction<IUser>(Type.SET_LOGIN);

export const UserActions = {
    Type,
    setLogin,
    setUser,
}

export type UserActions = Omit<typeof UserActions, 'Type'>;