"use strict"

// Post a book

export function addToCart(book){
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}

export function deleteCartItem(cart){
    return {
        type: 'DELET_CART_ITEM',
        payload: cart
    }
}