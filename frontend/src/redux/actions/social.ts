import {createAction} from "redux-actions";

enum Type {
    AUTH_LINKEDIN = "AUTH_LINKEDIN",
    USER_LINKEDIN = "USER_LINKEDIN"
}

const authLinkedin = createAction(Type.AUTH_LINKEDIN);
const userLinkedin = createAction(Type.USER_LINKEDIN);

export const SocialConnectActions = {
    Type,

    authLinkedin,
    userLinkedin
};

export type SocialConnectActions = Omit<typeof SocialConnectActions, 'Type'>
