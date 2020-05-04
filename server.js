const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var db = require('./db');

var logincontroller = require('./controllers/logincontroller');
var findAllUsers = require('./controllers/usercontroller');
app.post('/login',logincontroller.login);
app.get('/users',findAllUsers.findAllUsers);
app.listen(3000,function(){
    console.log("API running at port 3000");
})