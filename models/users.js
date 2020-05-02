const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var user=new Schema({
    name:String,
    emailid:String,
    mobileno:Number,
    isAdmin:Boolean,
    password:String

});
module.exports = mongoose.model("User",user);