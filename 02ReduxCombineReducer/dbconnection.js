var mysql = require('mysql');

var connection = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'react',
    debug: true
});

connection.getConnection(function(err, connection) {
    // connected! (unless `err` is set)
    if(err){
        // console.log(err);
        console.log("Connection errpor");
    }
    else{
        // console.log(connection);
        console.log("Connection success");
    }
});

module.exports = connection;