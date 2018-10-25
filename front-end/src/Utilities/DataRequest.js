import * as axios from "axios";
import {server_path} from "./Constants/Constants";


export function createUser(name='', username='', password='') {
    const endPoint = `createuser`;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('type', '1');
    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function createUserWithGoogle(token='') {
    const endPoint = `creategoogleuser`;
    const formData = new FormData();
    formData.append('token', token);
    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function loginWithGoogle(token='')
{
    const endPoint = `logingoogle`;
    const formData = new FormData();
    formData.append('token', token);

    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function login(username='',password='')
{
    const endPoint = `login`;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}
export function logout(username='',token='')
{
    const endPoint = `logout/access`;
    const formData = new FormData();
    formData.append('username', username);

    return requestDataFromServer(endPoint,'POST',formData,'application/json',token);
}

export function getCategories(token='')
{
    const endPoint = `category`;
    return requestDataFromServer(endPoint,'GET',null,'application/json',token);
}

export function createCategory(name='',token='') {
    const endPoint = `createcategory`;
    const formData = new FormData();
    formData.append('name', name);
    return requestDataFromServer(endPoint,'POST',formData,'application/json',token);
}

export function deleteCategory(categoryId=0,token) {
    const endPoint = `deletecategory?id=${categoryId}`;
    return requestDataFromServer(endPoint,'DELETE',null,'application/json',token);
}

export function getItemsInCategory(categoryId=0,token)
{
    const endPoint = `getcategory?categoryId=${categoryId}`;
    return requestDataFromServer(endPoint,'GET',null,'application/json',token);
}

export function updateCategoryName(categoryId=0,newName='',token='') {
    const endPoint = `updatecategory`;
    const formData = new FormData();
    formData.append('id', categoryId);
    formData.append('name', newName);
    return requestDataFromServer(endPoint,'PUT',formData,'application/json',token);
}

export function getItemDetailById(itemId=0,token) {
    const endPoint = `getitem?id=${itemId}`;
    return requestDataFromServer(endPoint,'GET',null,'application/json',token);
}

export function createItem(name='',description='',categoryId=0,token='')
{
    const endPoint = `createitem`;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category_id', categoryId);
    return requestDataFromServer(endPoint,'POST',formData,'application/json',token);
}

export function updateItemDetail(itemId=0,name='',categoryId=0,description='',token='') {
    const endPoint = `updateitem`;
    const formData = new FormData();
    formData.append('id', itemId);
    formData.append('name', name);
    formData.append('categoryid', categoryId.toString());
    formData.append('description', description);
    return requestDataFromServer(endPoint,'PUT',formData,'application/json',token);
}

export function deleteItem(itemId=0,token='') {
    const endPoint = `deleteitem?id=${itemId}`;
    return requestDataFromServer(endPoint,'DELETE',null,'application/json',token);
}

function requestDataFromServer(endPoint='',method='',data=null,contentType='',access_token='')
{
    console.log(access_token)
    return axios({
        url: server_path+endPoint,
        method: method,
        headers: {
            'Content-Type': contentType,
            'Authorization': `Bearer ${access_token}`
        },
        data: data
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response)
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}