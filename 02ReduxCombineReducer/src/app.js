"use strict"

import {createStore} from 'redux';

import reducers from './reducers/index';

// step 1 create the store
const store = createStore(reducers);

store.subscribe(function(){
	console.log('current state is: ', store.getState());
})

// step 2 create and dispath action

// store.dispatch({
// 	type: 'INCREMENT',
// 	payload: 1
// })

store.dispatch({
	type: "POST_BOOK",
	payload: [{
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
		}
	]
})

store.dispatch({
	type: "POST_BOOK",
	payload: [{
		id: 3,
		title: 'This is the third book title',
		description: 'This is the third book description',
		price: 30.44
	}]
	
})

store.dispatch({
	type: 'DELETE_BOOK',
	payload: {id: 3}
})

store.dispatch({
	type: 'UPDATE_BOOK',
	payload: {
		id: 2,
		title: 'title new update 2'
	}
})

// delete a book

//-->> CART ACTIONS <<--
// ADD TO CART
store.dispatch({
	type:"ADD_TO_CART",
	payload: {id: 2}
})
	//-------------------------------------------
