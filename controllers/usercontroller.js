var Users = require('../models/users');

exports.findAllUsers = function(req,res){
    Users.find({},function(err,users){
        if(err){
            res.status(500).send({message:"Internal Server Error"})
        }else{
            res.send(users);
        }
    });
};