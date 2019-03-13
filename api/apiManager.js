const bodyParser = require('body-parser');
const express =  require('express');

var app = express();

// Increase request buffer:
app.use(bodyParser.json({limit: '5mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));



module.exports = app;