import {RECEIVE_CATEGORIES} from "../Utilities/Constants/ActionTypes";

export default function categoryData(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES :
            return{
                ...state,
                categories:action.categories
            };
        default :
            return state;
    }
}