import {RECEIVE_USER} from "../Utilities/Constants/ActionTypes";

export default function userData(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USER :
            return{
                ...state,
                user:action.user
            };
        default :
            return state;
    }
}