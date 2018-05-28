var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://react_books:123456@ds235840.mlab.com:35840/react-shopping-cart');
Books = require('./models/books');
//-----POST BOOKS----------
app.post('/books', function(req, res){
  var book = req.body;
  Books.create(book, function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
});

app.get('/books', function(req, res){
  Books.find(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  });
});

app.delete('/books/:_id', function(req, res){
  var query = {_id: req.params._id};
  Books.remove(query, function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
});

//---->>> UPDATE BOOKS <<<------
app.put('/books/:_id', function(req, res){
  var book = req.body;
  var query = req.params._id;
  // if the field doesn't exist $set will set a new field
  var update = {
  '$set':{
          title:book.title,
          description:book.description,
          image:book.image,
          price:book.price
        }
  };
  // When true returns the updated document
  var options = {new: true};
  Books.findOneAndUpdate(query, update, options, function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  });
});
// End APIs

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('*', function(req, res){
	//003 What Redux is and How React-Redux work together
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
