import * as axios from "axios";
import {server_path} from "./Constants/Constants";


export function createUser(name='', username='', password='') {
    const endPoint = `createnewuser`;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('password', password);

    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function loginWithGoogle(name='', username='', userId='', token='')
{
    const endPoint = `logingoogle`;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('username', username);
    formData.append('user_id', userId);
    formData.append('token', token);

    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function login(username='',password='')
{
    const endPoint = `login`;
    const formData = new FormData();
    formData.append('name', username);
    formData.append('username', username);
    formData.append('password', password);

    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}
export function logout(username='')
{
    const endPoint = `logout`;
    const formData = new FormData();
    formData.append('username', username);

    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function getCategories()
{
    const endPoint = `category`;
    return requestDataFromServer(endPoint,'GET',null,'application/json');
}

export function createCategory(name='') {
    const endPoint = `createcategory`;
    const formData = new FormData();
    formData.append('name', name);
    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function deleteCategory(categoryId=0) {
    const endPoint = `deletecategory/${categoryId}`;
    return requestDataFromServer(endPoint,'DELETE',null,'application/json');
}

export function getItemsInCategory(categoryId=0)
{
    const endPoint = `category/${categoryId}`;
    return requestDataFromServer(endPoint,'GET',null,'application/json');
}

export function updateCategoryName(categoryId=0,newName='') {
    const endPoint = `modifycategory/${categoryId}`;
    const formData = new FormData();
    formData.append('name', newName);
    return requestDataFromServer(endPoint,'PUT',formData,'application/json');
}

export function getItemDetailById(itemId=0) {
    const endPoint = `item/${itemId}`;
    return requestDataFromServer(endPoint,'GET',null,'application/json');
}

export function createItem(name='',description='',categoryId=0)
{
    const endPoint = `createitem`;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category_id', categoryId);
    return requestDataFromServer(endPoint,'POST',formData,'application/json');
}

export function updateItemDetail(itemId=0,name='',categoryId=0,description='') {
    const endPoint = `modifyitem/${itemId}`;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('categoryid', categoryId.toString());
    formData.append('description', description);
    return requestDataFromServer(endPoint,'PUT',formData,'application/json');
}

export function deleteItem(itemId=0) {
    const endPoint = `deleteitem/${itemId}`;
    return requestDataFromServer(endPoint,'PUT',null,'application/json');
}

function requestDataFromServer(endPoint='',method='',data=null,contentType='')
{
    return axios({
        url: server_path+endPoint,
        method: method,
        headers: new Headers({
            'Content-Type': contentType,
        }),
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