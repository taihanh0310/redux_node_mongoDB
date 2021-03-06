"use strict"

import axios from "axios";

// GET BOOK
export function getBooks() {
    return function (dispatch) {
        axios.get("/api/v1/products")
            .then(function (response) {
                dispatch({
                    type: "GET_BOOKS",
                    payload: response.data
                })
            })
            .catch(function (err) {
                payload: err
            })
        dispatch({
            type: "GET_BOOKS_REJECTED",
        })
    }
}

// Post a book

export function postBooks(book) {
    console.log(book);
    return function (dispatch) {
        axios.post("/api/v1/products", book)
            .then(function (response) {
                dispatch({
                    type: 'POST_BOOK',
                    payload: response.data
                })
            })
            .catch(function (err) {
                dispatch({
                    type: "POST_BOOK_REJECTED",
                    payload: "there was an error while posting a new book"
                })
            })
    }
}

export function updateBooks(book) {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}

export function deleteBooks(id) {
    return function (dispatch) {
        axios.delete('/api/v1/products/' + id)
            .then(function (response) {
                dispatch({
                    type: "DELETE_BOOK",
                    payload: id
                })
            })
            .catch(function (err) {
                dispatch({
                    type: "DELETE_BOOK_REJECTED",
                    payload: err
                })
            })
    }
}