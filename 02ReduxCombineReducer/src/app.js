"use strict"

import {createStore} from 'redux';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, updateBooks, deleteBooks} from './actions/booksActions';

// step 1 create the store
const store = createStore(reducers);

store.subscribe(function(){
	console.log('current state is: ', store.getState());
})

store.dispatch(postBooks(
	[{
			id: 1,
			title: 'This is the book title',
			description: 'This is the book description',
			price: 33.44
		}, 
		{
			id: 2,
			title: 'This is the second book title',
			description: 'This is the  second book description',
			price: 10.44
		},
		{
			id: 3,
			title: 'This is the third book title',
			description: 'This is the third book description',
			price: 30.44
		}
	]
))

store.dispatch(deleteBooks({id: 3}))

store.dispatch(updateBooks(
	{
		id: 2,
		title: 'title new update 2'
	}
))

// delete a book

//-->> CART ACTIONS <<--
// ADD TO CART
store.dispatch(addToCart([{
	id: 1,
	title: 'This is the book title',
	description: 'This is the book description',
	price: 33.44
}]
))
	//-------------------------------------------
