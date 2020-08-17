const mongoose = require('mongoose');

// connection_uri = 'mongodb://localhost:27017/MEANStackDB';
const connection_uri = 'mongodb+srv://dhiraj:dhiraj@cluster0.ocvoq.mongodb.net/test?retryWrites=true&w=majority';

exports.mongoConnection = function () {
    mongoose.connect(connection_uri, { useNewUrlParser: true, useCreateIndex: true }, (error) => {
        if (!error) {
            console.log('mongodb default connection open to mongodb://27017');
        } else {
            console.log('mongoose default connection error' + JSON.stringify(error, undefined, 2));
        }
    });
}

