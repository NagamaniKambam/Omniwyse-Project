const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
var db = mongoose.connect('mongodb://localhost/OmniwyseNotifications',{ useNewUrlParser: true }) .then(()=>console.log("DB server connect"))
.catch(e => console.log("DB error", e));


module.exports = db;



