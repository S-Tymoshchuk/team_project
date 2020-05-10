import {call, takeLatest, put} from "redux-saga/effects";
import {SocialConnectActions} from "../actions/social";
import {getAccessToken, getAuthSocialId} from "./api/social";
import {Action} from "redux-actions";
import {ISocialAuthCOde} from "../../types/social";

function* AuthLinkedin(action: Action<ISocialAuthCOde>) {
    try {
        const {data} = yield call(getAccessToken, action.payload);
        const result = yield call(getAuthSocialId, data.accessToken);
        const user = {
            firstName: result.data.firstName.localized.ru_RU,
            lastName: result.data.lastName.localized.ru_RU
        };
        yield put(SocialConnectActions.userLinkedin(user))


    } catch (error) {
        console.error(error);
    }
}


export default function* watchSocialConnect() {
    yield takeLatest(SocialConnectActions.Type.AUTH_LINKEDIN, AuthLinkedin)
}
