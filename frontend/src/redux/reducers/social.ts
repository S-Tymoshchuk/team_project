import {handleActions} from "redux-actions";
import {SocialConnectActions} from '../actions/social';


const initialState: any = [];


export const SocialReducer = handleActions(
    {
        [SocialConnectActions.Type.USER_LINKEDIN]: (state, action) => {
            const newItem = {
                linkedin:{
                    provider:'linkedin',
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName
                }
            };
            return [newItem];
        },
    },
    initialState
);
