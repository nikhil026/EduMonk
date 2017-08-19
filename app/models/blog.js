var mongoose = require('mongoose');
var BlogSchema = mongoose.Schema({

    blogs          : {
        authorid:ObjectId,
        title:String,
        description:String,
        content:String
    }


});

module.exports = mongoose.model('Blog', blogSchema);
