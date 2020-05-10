import {call, takeLatest} from "redux-saga/effects";
import {createPost} from "./api/post";
import {PostActions} from "../actions/post";

function* SavePost(action: any) {
    try {
        const {data} = yield call(createPost, action.payload);
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
export default function* watchSocialConnect() {
    yield takeLatest(PostActions.Type.SET_POST, SavePost)
}
