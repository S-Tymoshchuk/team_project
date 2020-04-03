/* eslint-disable @typescript-eslint/no-namespace */
import { createAction } from 'redux-actions';
import { IUser } from '../../types';

enum Type {
    SET_USER = 'SET_USER',
    SET_LOGIN_AND_PASS="SET_LOGIN_AND_PASS"
}

const setUser = createAction<IUser>(Type.SET_USER);
const setLoginAndPass = createAction<IUser>(Type.SET_LOGIN_AND_PASS);

export const UserActions = {
    Type,
    setLoginAndPass,
    setUser,
}

export type UserActions = Omit<typeof UserActions, 'Type'>;

