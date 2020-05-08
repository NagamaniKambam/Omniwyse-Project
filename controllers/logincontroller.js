const jwt = require('jsonwebtoken');
var Users = require('../models/users');
exports.login = function(req,res){
    var uname = req.body.username;
    var pass = req.body.password;

    Users.findOne({email_id : uname,password : pass},function(err,user){
        if(err){
            res.status(500).send({message:"Internal Server Error"});
        }else{
            if(user){
                if(user.isAdmin){
                    jwt.sign({user},'secretkey',(err,token)=>{
                        res.send({
                            name:user.name,
                            email_id:user.email_id,
                            isAdmin:user.isAdmin,
                            token:token
                        })
                    })
                
                 }else{
                    res.send({
                        name:user.name,
                        email_id:user.email_id,
                        isAdmin:user.isAdmin,
                    })
                 }

            }else{
                res.status(404).send("User not found")
            }
           
       
    }
    });
};