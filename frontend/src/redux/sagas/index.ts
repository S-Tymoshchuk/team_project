import {all} from "redux-saga/effects";
import authSaga from "./auth";
import postSage from "./attachment";
import socialConnect from './social'
import savePost from './post'

export default function* rootSaga() {
  yield all([authSaga(), postSage(), socialConnect(), savePost()]);
}
