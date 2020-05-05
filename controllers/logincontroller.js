
var Users = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.login = function(req,res){
    var uname = req.body.username;
    var pass = req.body.password;

  //  bcrypt.genSalt(saltRounds, (err, salt) => {
  //      bcrypt.hash(yourPassword, salt, (err, hash) => {
            // Now we can store the password hash in db.
  //      });
  //  });

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