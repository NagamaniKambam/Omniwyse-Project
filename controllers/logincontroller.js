
var Users = require('../models/users');
exports.login = function(req,res){
    var uname = req.body.username;
    var pass = req.body.password;

    Users.findOne({email_id : uname,password : pass},function(err,user){
        if(err){
            res.status(500).send({message:"Internal Server Error"});
        }
        if(user){
            res.send(user);
        }else{
            res.status(404).send({message:"User Not Found"});
        }
    });
};