var express = require('express');
var router = express.Router();
var mProduct = require('../models/products');


// detail or all product
router.get('/:id?', function(req, res, next) {
    if(req.param.id){ // check request has param
        console.log("vao daty");
        // detail product
        mProduct.getProduct(req.param.id, function(error, results, fields){
            var data = {};
            if(error){
                data = {
                    "status": 500, 
                    "error": error, 
                    "response": null
                };
            }
            else{
                data = {
                    "status": 200, 
                    "error": null, 
                    "response": fields
                };
            }

            res.send(JSON.stringify(data));
        });
    }
    else{
        mProduct.getAll(function(error, results, fields){
            var data = {};
            if(error){
                data = {
                    "status": 500, 
                    "error": error, 
                    "response": null
                };
            }
            else{
                data = {
                    "status": 200, 
                    "error": null, 
                    "response": results
                };
            }

            res.send(JSON.stringify(data));
        });
    }
});

router.delete('/:id?', function(req, res, next) {
    if(req.param.id){ // check request has param
        // detail product
        mProduct.delete(req.param.id, function(error, results, fields){
            var data = {};
            if(error){
                data = {
                    "status": 500, 
                    "error": error, 
                    "response": null
                };
            }
            else{
                data = {
                    "status": 200, 
                    "error": null, 
                    "response": results
                };
            }

            res.send(JSON.stringify(data));
        });
    }
    else{
        var data = {
            "status": 404, 
            "error": "Not Found", 
            "response": null
        };   
        res.send(JSON.stringify(data));
    }
});

// ---------------------->>> Update product <<<-----------------------------
router.put('/:id', function(req, res, next) {
    console.log("id ne: " +  req.param.id);
    // detail product
    mProduct.update(req.param.id, req.body, function(error, results, fields){
        var data = {};
        if(error){
            data = {
                "status": 500, 
                "error": error, 
                "response": null
            };
        }
        else{
            data = {
                "status": 200, 
                "error": null, 
                "response": results
            };
        }

        res.send(JSON.stringify(data));
    });

});

// add 
router.post('/', function(req, res, next){
    console.log(req.body);
    mProduct.store(req.body, function(error, results, fields){
        if(error){
            var data = {};
            if(error){
                data = {
                    "status": 500, 
                    "error": error, 
                    "response": null
                };
            }
            else{
                data = {
                    "status": 200, 
                    "error": null, 
                    "response": results
                };
            }

            res.send(JSON.stringify(data));
        }
        else{
            var data = {};
            if(error){
                data = {
                    "status": 500, 
                    "error": error, 
                    "response": null
                };
            }
            else{
                data = {
                    "status": 200, 
                    "error": null, 
                    "response": results
                };
            }

            res.send(JSON.stringify(data));
        }
    });
});

module.exports = router;
