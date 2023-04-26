// This will part of lec 44 
const mongoose = require('mongoose');
const {Schema} = mongoose;

// copy from mongoose docs 
const UserSchema = new Schema({
    name:{
        type : String,
        required : true
    },

    email:{
        type : String,
        required : true,
        unique : true
    },

    password:{
        type : String,
        required : true
    },

    date:{
        type : Date,
        default : Date.now
    }
  });

  // for exporting this in other module it will take two arg 1 is model name or 2 is schema name 
//   here I am doing this for creating indexes 
const User = mongoose.model('user' , UserSchema);
// User.createIndexes();        //this will not recomonded 
module.exports = User;