const mongoose = require('mongoose');

const adminschema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    gander : {
        type : String,
        required : true
    },
});

const admin = mongoose.model('Admin',adminschema);

module.exports = admin;