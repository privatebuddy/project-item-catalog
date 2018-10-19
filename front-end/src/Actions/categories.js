import {RECEIVE_CATEGORIES} from "../Utilities/Constants/ActionTypes";

export function receiveCategories(categories) {
    return{
        type: RECEIVE_CATEGORIES,
        categories
    }
}
