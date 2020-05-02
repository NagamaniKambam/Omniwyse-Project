var express=require('express');
var app=express();

var bodyParser = require('body-parser');
var db=require('./db');

var Users=require('./models/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/users',function(req,res){
    Users.find({},function(err,users){
        if(err){
            res.status(500).send({error: "Users Is Empty"})
        }else{
            res.send(users);
        }
    });
});

app.post('/login',function(req,res){
    var uname=req.body.username;
    var pass=req.body.password;
    Users.findOne({username:uname,password:pass},function(err,users){
        if(err){
            res.status(500).send({error: "Invalid Credentials"})
        }
        if(users < 1){
            res.status(401).send({message:"Invalid Credentials"})
        }
    });
});

app.listen(3000,function(){
    console.log("Notifications API is running at port 3000...")
})