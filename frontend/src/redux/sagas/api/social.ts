import axios from 'axios'
import {IAccessToken, IAuthId, ISocialAuthCOde} from '../../../types/social'
import {getToken} from "../../../utils/getToken";


export function getAccessToken(data: ISocialAuthCOde) {
    return axios({
        url: 'http://localhost:3001/social/linkedin',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        data
    })

}

export function getAuthSocialId(token: IAccessToken) {
    const data = {
        token: token
    };
    return axios({
        url: 'http://localhost:3001/social/linkedinIn',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        data
    })
}


export function getDisplayImage(data: IAuthId) {
    return axios({
        url: `https://api.linkedin.com/v2/me?projection=(${data.id},profilePicture(displayImage~:playableStreams))`,
        method: "GET",
        headers: {
            Connection: 'keep-alive',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.token}`,
        }
    })
}
