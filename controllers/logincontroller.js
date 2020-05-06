
var Users = require('../models/users');
exports.login = function(req,res){
    var uname = req.body.username;
    var pass = req.body.password;

    Users.findOne({email_id : uname,password : pass},function(err,user){
        if(err){
            res.status(500).send({message:"Internal Server Error"});
        }
        if(user){
            res.send({
                name:user.name,
                emailid:user.email_id,
                isAdmin:user.isAdmin
            });
        }else{
            res.status(401).send({message:"Ivalid Username Or Password"});
        }
    });
};