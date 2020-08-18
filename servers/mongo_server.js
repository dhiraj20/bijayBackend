const mongoose = require('mongoose');

// MongoDB_URL = 'mongodb://localhost:27017/MEANStackDB';
const MongoDB_URL = 'mongodb+srv://dhiraj:dhiraj@cluster0.ocvoq.mongodb.net/test?retryWrites=true&w=majority';

exports.mongoConnection = function () {
    mongoose.connect(process.env.MongoDB_URL || MongoDB_URL, { useNewUrlParser: true, useCreateIndex: true }, (error) => {
        if (!error) {
            console.log('mongodb default connection open to mongodb://27017');
        } else {
            console.log('mongoose default connection error' + JSON.stringify(error, undefined, 2));
        }
    });
}

