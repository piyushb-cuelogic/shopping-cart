var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'iPhone-7-Plus.jpg',
        title: 'iPhone7 Plus',
        description: 'Flagship phone from Apple',
        price: 56000
    }),
    new Product({
        imagePath: 's8.png',
        title: 'Samsung Galaxy S8',
        description: 'Flagship phone from Samsung',
        price: 52000
    }),
    new Product({
        imagePath: 'moto-g4plus.jpg',
        title: 'Moto G4 Plus',
        description: 'Flagship phone from Motorola',
        price: 14000
    }),
    new Product({
        imagePath: 'Nokia-3310-0.jpg',
        title: 'Nokia 3310',
        description: 'Flagship phone from Nokia',
        price: 13000
    }),
    new Product({
        imagePath: 'mi_5.jpg',
        title: 'MI 5',
        description: 'Flagship phone from MI',
        price: 22000
    }),
    new Product({
        imagePath: 'one_plus_3t.jpg',
        title: 'OnePlus 3T',
        description: 'Flagship phone from OnePlus',
        price: 32000
    })
];

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        if (products.length === i - 1) {
            mongoose.disconnect();
        }
    });
}
