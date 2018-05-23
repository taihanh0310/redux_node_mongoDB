"use strict"

// Post a book

export function addToCart(book){
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}