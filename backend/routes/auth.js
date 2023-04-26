// this will part of lec 44 const jwt = require('jsonwebtoken');
const express = require('express');
const User = require('../models/User');
const router = express.Router();
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const fetchuser = require('../middleware/fetchuser');

// secret string for jwt authentication 
const JWT_SECRET = 'Maddyisagoodb$oy';

//Route1. create a User using: POST "/api/auth/createuser"    .No login required 
// here i am using express validator as an array this will part of lec 46 for sending cutom message we send a message here
router.post('/createuser' , [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password at least must be 5 characters').isLength({ min: 5 })
] ,async (req,res)=>{
    // const user = User(req.body);
    // user.save();
    // this will part of lec 45
    // console.log(req.body);
    // res.send(req.body);
    // res.send("hello");
    let success = false ;
    // Finds the validation errors in this request and wraps them in an object with handy functions this will part of lec 46
    // if there are errors return bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success , errors: errors.array() });
    }
  
    // Check whether the user with this email already exist
    try{
    let user = await User.findOne({email : req.body.email});
    if(user){
      return res.status(400).json({success , error : "Sorry a user with this email already exist"});
    }  
    // for creating new user 
    // Salt code is from lec 49
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash( req.body.password , salt);
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      // this will part lec 49 here I am making token for authentication
      const data = {
        user:{
          id : user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData);
      // res.json({user})
      success = true ;
      res.json({success , authtoken});

    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    } //this will part of lec 47
      // .then(user => res.json(user));
      // .catch(err => console.log(err),res.json({Error : "Please enter a valid email"}));  //I am doing this for show error on console

    // this will part of lec 44
    // obja={
    //     name: "Mudassir",
    //     age : 20
    // }
    // res.json(obja);
    })

//ROUTE 2. Authenticate a User using: POST "/api/auth/login"    .No login required this will part of lec 50
router.post('/login' , [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password can not be blank').exists(),
] ,async (req,res)=>{
  let success = false ;
  // if there are errors return bad request and the errors 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // here I am using destructuring this will part of lec 50
  const {email,password}= req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      success = false;
      return res.status(400).json({error :'Please try to login with correct credentials'});
    }

   const passwordCompare = await bcrypt.compare(password , user.password);
   success = false ;
   if(!passwordCompare){
    return res.status(400).json({success , error :'Please try to login with correct credentials'});
   }
   const data = {
    user:{
      id : user.id
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);
  success = true ;
  res.json({success , authtoken});
   
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error");
  }

  })    

//ROUTE 3. Get Loggedin User Detailed using: POST "/api/auth/getuser"    .login required this will part of lec 51
router.post('/getuser', fetchuser, async (req,res)=>{

  try {
    userId = req.user.Id;
    const user = await User.findOne(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})    

// for exporting this to other part of app
module.exports = router;