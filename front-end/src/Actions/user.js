import {RECEIVE_USER} from "../Utilities/Constants/ActionTypes";

export function receiveUser(user) {
    return{
        type: RECEIVE_USER,
        user
    }
}
