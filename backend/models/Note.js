// This will part of lec 44 
const mongoose = require('mongoose');
const {Schema} = mongoose;

// copy from mongoose docs 
const NotesSchema = new Schema({
    // user:{
    //     type : mongoose.Schema.Types.ObjectId,  //this two lines will part of lec 52
    //     ref: 'user'                             //it like FK of sql
    // },
    title:{
        type : String,
        required : true
    },

    description:{
        type : String,
        required : true
    },

    tag:{
        type : String,
        default : "General"
    },

    date:{
        type : Date,
        default : Date.now
    }
  });

  // for exporting this in other module it will take two arg 1 is model name or 2 is schema name 
module.exports = mongoose.model('notes' , NotesSchema);