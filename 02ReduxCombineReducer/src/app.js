"use strict"

// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';


// MIDDLEWARE
import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, updateBooks, deleteBooks} from './actions/booksActions';

// step 1 create the store

// write a log
const middleware = applyMiddleware(logger);

// const store = createStore(reducers);

const store = createStore(reducers, middleware);

// store.subscribe(function(){
// 	console.log('current state is: ', store.getState());
// })

import BooksList from './components/pages/booksList';

render(
	<Provider store={store}>
	<BooksList />
	</Provider>, document.getElementById('app')
);

// store.dispatch(deleteBooks({id: 3}))

// store.dispatch(updateBooks(
// 	{
// 		id: 2,
// 		title: 'title new update 2'
// 	}
// ))

// delete a book

//-->> CART ACTIONS <<--
// ADD TO CART
// store.dispatch(addToCart([{
// 	id: 1,
// 	title: 'This is the book title',
// 	description: 'This is the book description',
// 	price: 33.44
// }]
// ))
	//-------------------------------------------
