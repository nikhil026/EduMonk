// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    data            :            {
      info :
          {
              name      : String,
              email     : String,
              gender    : String ,
              DOB       : Date,
              state     : String,
              contact   : String,
              guardian  :  String,
              guardianContact:String

          },
        pInfo:{
          education:{
              highestQualification:{
               qualification:String,
                board_univ:String,
                course:String,
                school_college:String,
                  state:String,
                  percentage_cgpa:String,
                  completion:String

              }
          }
        },
      blogs :      [
                    { title:String,
                      description:String,
                      content:String
                      }]
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
   return (bcrypt.compareSync(password, this.local.password)) ;
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
