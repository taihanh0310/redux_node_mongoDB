var db = require('../dbconnection');

var Product = {
    // create function get all product
    getAll: function(callBack){
        return db.query("SELECT * FROM products", callBack);
    },

    // product detail
    getProduct: function(id, callBack){
        return db.query("SELECT * FROM products WHERE id=?",[id],callback);
    },

    // insert
    store: function(product, callBack){
        return db.query("INSERT INTO products(`title`, `description`, `image`, `qty`, `price`) VALUES(?, ?, ?, ?, ?)",[
            product.title,
            product.description,
            product.image, 
            product.qty, 
            product.price
        ],
        callBack
    );
    },

    delete: function(id, callBack){
        return db.query("DELETE FROM products WHERE id=?",[id],callback);
    },

    update: function(id, product, callBack){
        console.log("Ben nay co nhan dc id la: " + id);
        return db.query("UPDATE products SET title=?, description=?, image=?, qty=?, price=? where id=?",[
                product.title,
                product.description,
                product.image, 
                product.qty, 
                product.price,
                id
            ],
            callBack
        );
    }

};

module.exports = Product;