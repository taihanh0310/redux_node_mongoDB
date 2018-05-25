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

const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
	<Provider store={store}>
	<BooksList />
	</Provider>, document.getElementById('app')
);
