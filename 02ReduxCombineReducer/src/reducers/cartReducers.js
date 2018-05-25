"use strict"

// Cart reducers

export function cartReducers(state={cart:[]},action){
    debugger;
    switch(action.type){
        case 'ADD_TO_CART': {
            return {...state, cart: action.payload}
            break;
        }
        case 'DELETE_CART_ITEM': {
            return {...state, cart: action.payload}
            break;
        }
        // UPDATE_CART
        case 'UPDATE_CART': {
            const currentCartToUpdate = [...state.cart];

            const indexToUpdate = currentCartToUpdate.findIndex(function(book){
                return book._id == action._id;
            });
            
            const newCartToUpdate = {
                ...currentCartToUpdate[indexToUpdate],
                quantity: currentCartToUpdate[indexToUpdate].quantity + action.unit
            };

            let cartUpdate = [...currentCartToUpdate.slice(0, indexToUpdate), newCartToUpdate, ...currentCartToUpdate.slice(indexToUpdate + 1)];
            return {...state, cart: cartUpdate}
            break;
        }

    }
    return state;
}
