const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateTokern = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) =>{
    const {name, prn, email, password, pic} = req.body;
    
    //Checking if the user exists in mongoDB
    if(!name || !prn || !email || !password){
        res.status(400);
        throw new Error("Please Enter all the Fields"); 
    }
    //Return error if user exists
    const userExists = await User.findOne({prn});
    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    //Create the user if such user doesn't exist
    const user = await User.create({
        name, prn, email, password, pic,
    });
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            prn: user.prn,
            email: user.email,
            pic: user.pic,
            token:generateTokern(user._id),
        });
    } else{
        res.status(400);
        throw new Error("Failed to Create the User")
    }
});

const authUser = asyncHandler(async(req, res)=>{
    const { prn, password} = req.body;

    const user = await User.findOne({ prn });
    //console.log(user);

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            prn: user.prn,
            email: user.email,
            pic: user.pic,
            token:generateTokern(user._id),
        })
    } else{
        res.status(400);
        throw new Error("Invalid Email or Password");
    }   
})

module.exports = {registerUser, authUser};