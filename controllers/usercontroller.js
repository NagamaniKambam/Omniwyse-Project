var Users = require('../models/users');
const jwt = require('jsonwebtoken');

exports.findAllUsers = function(req,res){
    jwt.verify(req.token,'secretkey',(err,authdata)=>{
        if(err){
            res.sendStatus(403);
        }else{
            Users.find({},function(err,data){
                if(err){
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                }else{
                    res.send(data);
        
                }
            });

        }
    });
};