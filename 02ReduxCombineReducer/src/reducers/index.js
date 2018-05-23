"use strict"

import {combineReducers} from 'redux';

// Here import reducer to be combined

import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// Here combine the reducera
export default combineReducers({
    books: booksReducers,
    cart: cartReducers
})