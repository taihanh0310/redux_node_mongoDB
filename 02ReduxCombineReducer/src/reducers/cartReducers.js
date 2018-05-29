"use strict"

// Cart reducers

export function cartReducers(state={cart:[]},action){

    switch(action.type){
        case 'GET_CART': {
            return {
                ...state, 
                cart: action.payload,
                totalAmount: totals(action.payload).amount, 
                totalQuantity: totals(action.payload).quantity
            }
            break;
        }
        case 'ADD_TO_CART': {
            return {
                ...state, 
                cart: action.payload,
                totalAmount: totals(action.payload).amount, 
                totalQuantity: totals(action.payload).quantity
            }
            break;
        }
        case 'DELETE_CART_ITEM': {
            return {
                ...state, 
                cart: action.payload,
                totalAmount: totals(action.payload).amount, 
                totalQuantity: totals(action.payload).quantity
            }
            break;
        }
        // UPDATE_CART
        case 'UPDATE_CART': {
            return {
                ...state, 
                cart: action.payload,
                totalAmount: totals(action.payload).amount, 
                totalQuantity: totals(action.payload).quantity
            }
            break;
        }

    }
    return state;
}

// Calculator totals
export function totals(payloadArr){
    const totalAmount = payloadArr.map(function(cartArr){
                            return cartArr.price * cartArr.quantity;
                        }).reduce(function(a, b){
                            return a + b;
                        }, 0); //start summing from index0
    
    const totalQty = payloadArr.map(function(cartArr){
                            return cartArr.quantity;
                        }).reduce(function(a, b){
                            return a + b;
                        }, 0); //start summing from index0
    
    return {
            amount: totalAmount.toFixed(2),
            quantity: totalQty
        }
}