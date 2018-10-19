import {RECEIVE_ITEM_DETAIL, RECEIVE_ITEMS, RECEIVE_LATEST_ITEMS} from "../Utilities/Constants/ActionTypes";

export default function itemData(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ITEMS :
            return{
                ...state,
                items:action.items
            };
        case RECEIVE_LATEST_ITEMS :
            return{
                ...state,
                newItems:action.items
            };
        case RECEIVE_ITEM_DETAIL :
            return{
                ...state,
                browseItem:action.item
            }
        default :
            return state;
    }
}