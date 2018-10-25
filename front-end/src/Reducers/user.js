import {RECEIVE_USER} from "../Utilities/Constants/ActionTypes";

export default function userData(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USER :
            if(action.user !== undefined)
            {
                return{
                    ...state,
                    user:{
                        name:action.user.name,
                        access_token:action.user.access_token,
                        refresher_token:action.user.refresh_token
                    }

                };
            }else
            {
                return{
                    ...state,
                    user:undefined
                };
            }

        default :
            return state;
    }
}