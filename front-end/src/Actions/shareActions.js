import {showLoading, hideLoading} from 'react-redux-loading';
import {
    createUser,
    login,
    logout,
    getCategories,
    getItemsInCategory,
    updateCategoryName,
    getItemDetailById,
    updateItemDetail,
    deleteCategory,
    createCategory,
    createItem,
    loginWithGoogle,
    deleteItem
} from "../Utilities/DataRequest";
import {receiveUser} from "./user";
import {receiveItemDetail, receiveItems, receiveLatestItem} from "./items";
import {receiveCategories} from "./categories";

export function handleCreateNewUser(name,username,password) {
    return (dispatch) => {
        dispatch(showLoading());
        return createUser(name,username,password)
            .then((result) => {
                dispatch(hideLoading());
            })
    }
}

export function handleLogin(username,password) {
    return (dispatch) => {
        dispatch(showLoading());
        return login(username,password)
            .then((result) => {
                if(result.data[0].login_status.toString() !== '0')
                {
                    dispatch(receiveUser(result.data));
                }
                dispatch(hideLoading());
            })
    }
}

export function handleLogout(username) {
    return (dispatch) => {
        dispatch(showLoading());
        return logout(username)
            .then((result) => {
                dispatch(receiveUser(undefined));
                dispatch(hideLoading());
            })
    }
}

export function handleGetMainPageData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getCategories()
            .then((result) => {
                dispatch(receiveCategories(result.data.categories));
                dispatch(receiveLatestItem(result.data.latestItems));
                dispatch(hideLoading());
            })
    }
}

export function handleGetItemsInCategory(categoryId) {
    return (dispatch) => {
        dispatch(showLoading());
        return getItemsInCategory(categoryId)
            .then((result) => {
                dispatch(receiveItems(result.data));
                dispatch(hideLoading());
            })
    }
}

export function handleChangeCategoryName(categoryId,name) {
    return (dispatch) => {
        dispatch(showLoading());
        return updateCategoryName(categoryId,name)
            .then((result) => getCategories()
                .then((result) => {
                dispatch(receiveCategories(result.data.categories));
                dispatch(receiveLatestItem(result.data.latestItems));
                dispatch(hideLoading());
            }))
    }
}

export function handleGetItemDetailById(itemId) {
    return (dispatch) => {
        dispatch(showLoading());
        return getItemDetailById(itemId)
            .then((result) => {
                dispatch(receiveItemDetail(result.data.item));
                dispatch(receiveCategories(result.data.categories));
                dispatch(hideLoading());
            })
    }
}

export function handleChangeItemDetail(itemId,name,categoryId,descriptions) {
    return (dispatch) => {
        dispatch(showLoading());
        return updateItemDetail(itemId,name,categoryId,descriptions)
            .then((result) => getItemDetailById(itemId)
                .then((result) => {
                    dispatch(receiveItemDetail(result.data.item));
                    dispatch(receiveCategories(result.data.categories));
                    dispatch(hideLoading());
                })
            )
    }
}

export function handleDeleteCategory(categoryId) {
    return (dispatch) => {
        dispatch(showLoading());
        return deleteCategory(categoryId)
            .then((result) => getCategories()
                .then((result) => {
                    dispatch(receiveCategories(result.data.categories));
                    dispatch(receiveLatestItem(result.data.latestItems));
                    dispatch(hideLoading());
                })
            )
    }
}

export function handleCreateCategory(name) {
    return (dispatch) => {
        dispatch(showLoading());
        return createCategory(name)
            .then((result) =>
                dispatch(hideLoading())
            )
    }
}

export function handleCreateItem(name,description,categoryId) {
    return (dispatch) => {
        dispatch(showLoading());
        return createItem(name,description,categoryId)
            .then((result) =>
                dispatch(hideLoading())
            )
    }
}


export function handleLoginWithGoogle(name,username,userId,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return loginWithGoogle(name,username,userId,token)
            .then((result) => {
                if(result.data[0].login_status.toString() !== '0')
                {
                    dispatch(receiveUser(result.data));
                }
                dispatch(hideLoading());
            })
    }
}

export function handleDeleteItem(itemId) {
    return (dispatch) => {
        dispatch(showLoading());
        return deleteItem(itemId)
            .then((result) =>
                dispatch(hideLoading())
            )
    }
}

