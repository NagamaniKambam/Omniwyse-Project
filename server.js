const express = require('express');
const app = express();
const cors = require('cors');

var bodyParser = require('body-parser');

var router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
var db = require('./db');

var logincontroller = require('./controllers/logincontroller');
var findAllUsers = require('./controllers/usercontroller');
var postAnnouncement = require('./controllers/announcement');

app.post('/login',logincontroller.login);
app.get('/users',verifyToken,findAllUsers.findAllUsers);
app.post('/announcements',verifyToken,postAnnouncement.announcement);
app.get('/announcements',verifyToken,postAnnouncement.findAnnouncement);

function verifyToken(req,res,next){
    const barearHeader = req.headers['authorization'];

    if(typeof barearHeader != 'undefined'){

        const barear = barearHeader.split(' ');

        const barearToken = barear[1];

        req.token = barearToken;

        next();

    }else{
        res.sendStatus(403);
    }
}

app.listen(3000,function(){
    console.log("API running at port 3000");
})