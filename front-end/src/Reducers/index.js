import { combineReducers } from 'redux';
import itemData from './items';
import userData from './user';
import categoryData from './categories';
import {loadingBarReducer} from 'react-redux-loading';

export default combineReducers({
    itemData,
    userData,
    categoryData,
    loadingBar: loadingBarReducer
})