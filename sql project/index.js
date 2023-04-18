const express = require('express');

const port = 9000;

const app = express();

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("server is state on port "+port);
});