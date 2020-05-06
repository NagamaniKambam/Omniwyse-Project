const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
var db = mongoose.connect('mongodb://localhost/OmniwyseNotifications',{ useNewUrlParser: true });


module.exports = db;