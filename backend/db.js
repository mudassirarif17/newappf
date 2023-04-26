// This code is written by me and it will a part of lec 43
const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/iNewsapp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = ()=>{
    // mongoose.connect ek built in func hai ye 2 arg leta hai ek tw uri string or dsra callback func 
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

// for exporting this in other module
module.exports = connectToMongo;