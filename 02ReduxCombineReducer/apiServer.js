var path = require('path');
var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://react_books:123456@ds235840.mlab.com:35840/react-shopping-cart');

var db = mongoose.connection;
db.on('error', console.error.bind(console, '#Mongodb - connection error'));

// --->>> SET UP SESSIONS <<<------
app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 2 },
  store: new MongoStore({ mongooseConnection: db, ttl: 2 * 24 * 60 * 60 })
}));

// Save the session cart
app.post('/cart', function (req, res) {
  var cart = req.body;
  req.session.cart = cart;
  req.session.save(function (err) {
    if (err) {
      throw err;
    }
    res.json(req.session.cart);
  })
});
// GET SESSION CART API
app.get('/cart', function (req, res) {
  if (typeof req.session.cart !== 'undefined') {
    res.json(req.session.cart);
  }
});
//--->>> END SESSION SET UP <<<----


Books = require('./models/books');
//-----POST BOOKS----------
app.post('/books', function (req, res) {
  var book = req.body;
  Books.create(book, function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  })
});

app.get('/books', function (req, res) {
  Books.find(function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.delete('/books/:_id', function (req, res) {
  var query = { _id: req.params._id };
  Books.remove(query, function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  })
});

//---->>> UPDATE BOOKS <<<------
app.put('/books/:_id', function (req, res) {
  var book = req.body;
  var query = req.params._id;
  // if the field doesn't exist $set will set a new field
  var update = {
    '$set': {
      title: book.title,
      description: book.description,
      image: book.image,
      price: book.price
    }
  };
  // When true returns the updated document
  var options = { new: true };
  Books.findOneAndUpdate(query, update, options, function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});
// End APIs

app.listen(30001, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("API server is listening on http://localhost:3001");
});
