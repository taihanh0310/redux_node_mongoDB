"use strict"

import axios from "axios";

// GET BOOK
// export function getBooks(){
//     return {
//         type: 'GET_BOOKS'
//     }
// }
export function getBooks() {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/v1/products")
            .then(function (response) {
                dispatch({
                    type: "GET_BOOKS",
                    payload: response.data
                })
            })
            .catch(function (err) {
                dispatch({
                    type: "GET_BOOKS_REJECTED",
                    payload: err
                })
            })
    }
}

// Post a book

export function postBooks(book){
    return {
        type: "POST_BOOK",
        payload: book
    }
}

export function updateBooks(book){
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}

export function deleteBooks(id){
    return {
        type: 'DELETE_BOOK',
        payload: id
    }
}