var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var dbName = "react-shopping-cart";
var tableBooks = "books";

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// APIs
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://react_books:123456@ds235840.mlab.com:35840/react-shopping-cart');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, '#Mongodb - connection error'));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port: '3306',
  user     : 'root',
  password : 'root',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);

  var sqlCreateDatabase = "CREATE DATABASE IF NOT EXISTS " + dbName;
  var sqlCreateTable = "CREATE TABLE IF NOT EXISTS " + tableBooks;

  connection.query(sqlCreateDatabase, function(err, result){
    if(err){
      throw err;
    }
    connection.query("USE " + dbName, function(err2){
      if(err2){
        throw err2;
      }

      connection.query(sqlCreateTable, function(err3){
        if(err3){
          throw err3;
        }
      });
    });
    console.log("Database created!");
  });

});

/*//--------------------> mysql connection <----------------------------*/
app.post('/books', function(req, res){
  var sql = "INSERT INTO ";
});

/*//--------------------> end mysql connection <----------------------------*/

// Books = require('./models/books');
// //-----POST BOOKS----------
// app.post('/books', function(req, res){
//   var book = req.body;
//   Books.create(book, function(err, books){
//     if(err){
//       throw err;
//     }
//     res.json(books);
//   })
// });

// app.get('/books', function(req, res){
//   Books.find(function(err, books){
//     if(err){
//       throw err;
//     }
//     res.json(books);
//   });
// });

// app.delete('/books/:_id', function(req, res){
//   var query = {_id: req.params._id};
//   Books.remove(query, function(err, books){
//     if(err){
//       throw err;
//     }
//     res.json(books);
//   })
// });

// //---->>> UPDATE BOOKS <<<------
// app.put('/books/:_id', function(req, res){
//   var book = req.body;
//   var query = req.params._id;
//   // if the field doesn't exist $set will set a new field
//   var update = {
//   '$set':{
//           title:book.title,
//           description:book.description,
//           image:book.image,
//           price:book.price
//         }
//   };
//   // When true returns the updated document
//   var options = {new: true};
//   Books.findOneAndUpdate(query, update, options, function(err, books){
//     if(err){
//       throw err;
//     }
//     res.json(books);
//   });
// });
// End APIs

app.get('*', function(req, res){
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
