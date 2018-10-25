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
    deleteItem, createUserWithGoogle
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
                dispatch(receiveUser(result.data));
                dispatch(hideLoading());
            })
    }
}

export function handleLogout(username,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return logout(username,token)
            .then((result) => {
                dispatch(receiveUser(undefined));
                dispatch(hideLoading());
            })
    }
}

export function handleGetMainPageData(token='') {
    return (dispatch) => {
        dispatch(showLoading());
        return getCategories(token)
            .then((result) => {
                dispatch(receiveCategories(result.data.categories));
                dispatch(receiveLatestItem(result.data.latestItems));
                dispatch(hideLoading());
            })
    }
}

export function handleGetItemsInCategory(categoryId,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return getItemsInCategory(categoryId,token)
            .then((result) => {
                dispatch(receiveItems(result.data));
                dispatch(hideLoading());
            })
    }
}

export function handleChangeCategoryName(categoryId,name,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return updateCategoryName(categoryId,name,token)
            .then((result) => getCategories(token)
                .then((result) => {
                dispatch(receiveCategories(result.data.categories));
                dispatch(receiveLatestItem(result.data.latestItems));
                dispatch(hideLoading());
            }))
    }
}

export function handleGetItemDetailById(itemId,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return getItemDetailById(itemId,token)
            .then((result) => {
                dispatch(receiveItemDetail(result.data.item));
                dispatch(receiveCategories(result.data.categories));
                dispatch(hideLoading());
            })
    }
}

export function handleChangeItemDetail(itemId,name,categoryId,descriptions,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return updateItemDetail(itemId,name,categoryId,descriptions,token)
            .then((result) => getItemDetailById(itemId,token)
                .then((result) => {
                    dispatch(receiveItemDetail(result.data.item));
                    dispatch(receiveCategories(result.data.categories));
                    dispatch(hideLoading());
                })
            )
    }
}

export function handleDeleteCategory(categoryId,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return deleteCategory(categoryId,token)
            .then((result) => getCategories(token)
                .then((result) => {
                    dispatch(receiveCategories(result.data.categories));
                    dispatch(receiveLatestItem(result.data.latestItems));
                    dispatch(hideLoading());
                })
            )
    }
}

export function handleCreateCategory(name,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return createCategory(name,token)
            .then((result) =>
                dispatch(hideLoading())
            )
    }
}

export function handleCreateItem(name,description,categoryId,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return createItem(name,description,categoryId,token)
            .then((result) =>
                dispatch(hideLoading())
            )
    }
}


export function handleLoginWithGoogle(token) {
    return (dispatch) => {
        dispatch(showLoading());
        return loginWithGoogle(token)
            .then((result) => {
                dispatch(receiveUser(result.data));
                dispatch(hideLoading());
            })
    }
}

export function handleRegisterWithGoogle(token) {
    return (dispatch) => {
        dispatch(showLoading());
        return createUserWithGoogle(token)
            .then((result) => {
                dispatch(receiveUser(result.data));
                dispatch(hideLoading());
            })
    }
}

export function handleDeleteItem(itemId,token) {
    return (dispatch) => {
        dispatch(showLoading());
        return deleteItem(itemId,token)
            .then((result) =>
                dispatch(hideLoading())
            )
    }
}

