import {createAction} from "redux-actions";

enum Type {
    ADD_POST = 'ADD_POST',
    SET_POST = 'SET_POST'
}

const addPost = createAction(Type.ADD_POST);
const setPost = createAction(Type.SET_POST);

export const PostActions = {
    Type,

    addPost,
    setPost
};

export type PostActions = Omit<typeof PostActions, "Type">;
