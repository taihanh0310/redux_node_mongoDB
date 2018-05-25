"use strict"

// Book reducers

export function booksReducers(state = {books: 
		[{
			_id: 1,
			title: 'This is the book title',
			description: 'This is the book description',
			price: 33.44
		}, 
		{
			_id: 2,
			title: 'This is the second book title',
			description: 'This is the  second book description',
			price: 10.44
		},
		{
			_id: 3,
			title: 'This is the third book title',
			description: 'This is the third book description',
			price: 30.44
		}
	]
}, action){
    switch(action.type) {

    	case 'GET_BOOKS': {
    		return {...state, books: [...state.books]}
    		break;
    	}

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
				// return book._id == action.payload._id;
				return book._id == action.payload
			})

			// use slide to remove the book at the specified index
			return {books: [...currentBookToDelete.slice(0, indexToDelete), 
				...currentBookToDelete.slice(indexToDelete + 1)]};
			break;
		}

		case 'UPDATE_BOOK': {
			const currentBookToUpdate = [...state.books];

			const indexToUpdate = currentBookToUpdate.findIndex(function(book){
				return book._id == action.payload._id;
			});

			const newBookTpUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			};

			return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookTpUpdate, 
				...currentBookToUpdate.slice(indexToUpdate + 1)]};
			break;
		}
	}
	return state;
}