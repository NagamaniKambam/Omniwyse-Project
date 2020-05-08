var Announcement = require('../models/announcements');
const jwt = require('jsonwebtoken');

exports.announcement = function(req,res){

    jwt.verify(req.token,'secretkey',(err,data)=>{
        if(err){
            res.sendStatus(403);
        }else{
            Announcement.insertMany({title:req.body.title,description:req.body.description,details: req.body.details,link:req.body.link,imageURL:req.body.imageURL,date:Date()},function(err,data){
                if(err){
                    console.log(err);
                    res.status(500).send("Internal server error ")
                }else{
                    res.send(data);
                }
            });

        }
    });

   
}

exports.findAnnouncement = function(req,res){
    jwt.verify(req.token,'secretkey',(err,data)=>{
        if(err){
            res.sendStatus(403);
        }else{
            Announcement.find({}).sort({date:-1}).exec(function(err,data){
                if(err){
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                }else{
                    res.send(data);
        
                }
            });

        }
    });
}