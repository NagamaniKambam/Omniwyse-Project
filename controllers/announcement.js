var Announcement = require('../models/announcements');
const jwt = require('jsonwebtoken');
const fs = require('fs');

exports.announcement = function(req,res){

    jwt.verify(req.token,'secretkey',(err,userdata)=>{
        if(err){
            res.sendStatus(403);
            console.log(err);
        }else{
            if(req.file){
                var image = req.file.path;
                var url = image.split('\\');
                var imageurl = "http://localhost:3000/"+url[1]; 
                Announcement.insertMany({title:req.body.title,description:req.body.description,details: req.body.details,link:req.body.link,imageURL : imageurl,tags:req.body.tags,date:Date()},function(err,data){
                    if(err){
                        console.log(err);
                        res.status(500).send("Internal server error ")
                    }else{
                        res.send(data);
                    }
                });

            }else{
                Announcement.insertMany({title:req.body.title,description:req.body.description,details: req.body.details,link:req.body.link,tags:req.body.tags,date:Date()},function(err,data){
                    if(err){
                        console.log(err);
                        res.status(500).send("Internal server error ")
                    }else{
                        res.send(data);
                    }
                });
            }
           

        }
    });

   
}

exports.findAnnouncement = function(req,res){
  
            Announcement.find({}).sort({date:-1}).exec(function(err,data){
                if(err){
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                }else{
                    //const imgArray= data.image.map(element => element._id);
                    res.send(data);
        
                }
            });

        }