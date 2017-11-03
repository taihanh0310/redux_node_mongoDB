const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var db;

MongoClient.connect('mongodb://test:123456@ds245715.mlab.com:45715/usermanagement', (err, database) => {
    if (err) {
        console.log(err);
        return;
    }
    db = database;

    app.listen(3000, () => {
        console.log('listening on 3000');
    });
    
    // GET
    app.get('/', (req, res) => {
        // The toArray method takes in a callback function that allows us to do stuff with quotes we retrieved from MongoLab.
        var cursor = db.collection('quotes').find().toArray(function(err, results) {
            
            if (err){
                console.log(err);
                return; 
            }
            console.log(results);
            // send HTML file populated with quotes here
            res.render('index.ejs', {quotes: results});
          });
    });
    
    // POST
    app.post('/quotes', (req, res) => {
        db.collection('quotes').save(req.body, (err, result) => {
            if (err){
                console.log(err);
                return; 
            }

            console.log('saved to database');
            res.redirect('/');
        });
    });
//    
//    //PUT
//    app.put('/quotes', (req, res) => {
//        // Handle put request
//        db.collection('quotes')
//        .findOneAndUpdate({name: 'Yoda'}, {
//          $set: {
//            name: req.body.name,
//            quote: req.body.quote
//          }
//        }, {
//          sort: {_id: -1},
//          upsert: true
//        }, (err, result) => {
//          if (err) {
//              return res.send(err);
//          }
//          res.send(result);
//        });
//    });
//    
//    // DELETE
//    app.delete('/quotes', (req, res) => {
//        // Handle delete event here
//        db.collection('quotes').findOneAndDelete({name: req.body.name},
//        (err, result) => {
//          if (err) return res.send(500, err)
//          res.send({message: 'A darth vadar quote got deleted'})
//        });
//    });

});



//app.listen(3000, function() {
//  console.log('listening on 3000')
//})
//
//// GET
//app.get('/', function(request, response){
//    console.log('day la get');
////    response.send('Hello world');
//    response.sendFile(__dirname + '/index.html')
//})
//
//// POST
//app.post('/quotes', (req, res) => {
//  console.log('Day la post: Hellooooooooooooooooo!');
//  console.log(req.body);
//})
