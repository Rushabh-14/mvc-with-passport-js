const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/passport');

const db = mongoose.connection;

db.on('err',console.error.bind(console,'db is not start'));

db.once('open',(err)=>{
    if(err){
        console.log('db not start');
        return false;
    }
    console.log('db is start');
});

module.exports = db;