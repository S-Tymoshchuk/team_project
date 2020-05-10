import axios from 'axios';
import {getToken} from "../../../utils/getToken";


export function createPost(post: any) {
    const data = {
        title: post.title,
        body: post.body,
        fileId: post.fileId,
        schedule: {
            providerId: 'linkedin',
            startsAt: post.schedule.startsAt,
            "notify": "true",
            "status": "pending"
        }
    }
    return axios({
        url: 'http://localhost:3001/post/create',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        data
    })

}
