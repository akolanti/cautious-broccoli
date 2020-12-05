const  mongoose = require('mongoose');

const  dbURI = 'mongodb+srv://auditionHere:aaronAmit@cluster0.xkvkn.mongodb.net/<AuditionHere>?retryWrites=true&w=majority';
mongoose.connect(dbURI,{dbName:'AuditionHere'});

mongoose.connection.on('connected', () => {  console.log(`Mongoose connected `); });
mongoose.connection.on('error', err => {  console.log('Mongoose connection error:', err); });
mongoose.connection.on('disconnected', () => {    console.log('Mongoose disconnected');  }); 

