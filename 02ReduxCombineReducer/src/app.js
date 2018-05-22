"use strict"

import {createStore} from 'redux';


// step 3 define the reducer

// dinh  nghia state = books collection

// neu co them mot book nua thi add book vao books
const reducer = function(state = {books: []}, action){

	switch(action.type) {
		case 'POST_BOOK': {
			// let books = state.books.push(action.payload);
			// return books;
			return {books: [...state.books, ...action.payload]} // add action.payload in collection
			break;
		}
		// Delete book
		case 'DELETE_BOOK': {
			// create a copy of the current array of books
			const currentBookToDelete = [...state.books];

			// determine at which index in array is the book to be delete
			const indexToDelete = currentBookToDelete.findIndex(function(book){
				return book.id == action.payload.id;
			})

			// use slide to remove the book at the specified index
			return {books: [...currentBookToDelete.slice(0, indexToDelete), 
				...currentBookToDelete.slice(indexToDelete + 1)]};
			break;
		}

		case 'UPDATE_BOOK': {
			const currentBookToUpdate = [...state.books];

			const indexToUpdate = currentBookToUpdate.findIndex(function(book){
				return book.id === action.payload.id;
			});

			const newBookTpUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			};

			console.log("what is it newBookTpUpdate", newBookTpUpdate);

			return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookTpUpdate, 
				...currentBookToUpdate.slice(indexToUpdate + 1)]};
			break;
		}
	}
	return state;
}

// step 1 create the store
const store = createStore(reducer);

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

