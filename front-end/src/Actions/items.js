import {RECEIVE_ITEM_DETAIL, RECEIVE_ITEMS, RECEIVE_LATEST_ITEMS} from "../Utilities/Constants/ActionTypes";

export function receiveItems(items) {
    return{
        type: RECEIVE_ITEMS,
        items
    }
}

export function receiveLatestItem(items) {
    return{
        type: RECEIVE_LATEST_ITEMS,
        items
    }
}

export function receiveItemDetail(item) {
    return{
        type: RECEIVE_ITEM_DETAIL,
        item
    }
}
