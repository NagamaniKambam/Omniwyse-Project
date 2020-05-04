const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var user=new Schema({
    name:String,
    email_id:String,
    mobileno:Number,
    isAdmin:Boolean,
    password:String

});
module.exports = mongoose.model("User",user);