const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateTokern = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) =>{
    const {name, email, password, pic} = req.body;
    
    //Checking if the user exists in mongoDB
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the Fields"); 
    }
    //Return error if user exists
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    //Create the user if such user exists
    const user = await User.create({
        name, email, password, pic,
    });
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token:generateTokern(user._id),
        });
    } else{
        res.status(400);
        throw new Error("Failed to Create the User")
    }
});

module.exports = {registerUser};