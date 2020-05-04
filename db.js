const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/OmniwyseNotifications',{ useNewUrlParser: true });

module.exports = db;