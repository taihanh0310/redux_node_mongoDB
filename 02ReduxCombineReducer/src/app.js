"use strict"

// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

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
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';



render(
	<Provider store={store}>
		<div className="container">
			<Menu/>
			<BooksList />
			<Footer/>
		</div>
	</Provider>, document.getElementById('app')
);
