const mongoose = require('mongoose');
const keys = require('../config/key');

mongoose.connect(keys.mongoURI)
    .then(res => {
        console.log('mongoose connected: ', res);
    })
    .catch(err => {
        console.log('mongoose failed connection: ', err);
    });