var mongoose = require('mongoose');

var con=mongoose.connect('mongodb://localhost/OmniwyseNotifications',{ useNewUrlParser: true });

module.exports= con;