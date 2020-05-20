const Tags = require('../models/tags');
const jwt = require('jsonwebtoken');

exports.findUserInTags = function(req,res){
    jwt.verify(req.token,'secretkey',(err,userdata)=>{
        if(err){
            console.log(err);
            res.sendStatus(403);
         
        }else{
    Tags.find({},function(err,tags){
        if(err){
            console.log(err);
            res.sendStatus(403);
        }else{
            var userTagsList = ["employees"];
            console.log(typeof req.params.userid);

            tags[0].javaTeam.forEach(element => {
                if(JSON.stringify(element) === req.params.userid){
                    userTagsList.push("javaTeam");
                }
            });
            tags[0].javascriptTeam.forEach(element => {
                if(JSON.stringify(element) === req.params.userid){
                    userTagsList.push("javascriptTeam");
                }
            });
           res.send(userTagsList);

        }
    },)
}
})
}