"use strict"

// Book reducers

export function booksReducers(state = {books: []}, action){
    debugger;
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