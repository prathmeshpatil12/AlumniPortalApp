const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateTokern = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) =>{
    const {name, prn, type} = req.body;
    const password = "changeme"; //Default Password
    
    //Checking if the user exists in mongoDB
    if(!name || !prn ){
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
    console.log(req.body);
    console.log("IN userController");
    const user = await User.create({
        name, prn, type, password,
    });
    console.log(user);
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            prn: user.prn,
            type: user.type,
            pic: user.pic,
            token:generateTokern(user._id),
        });
        console.log("DOne with mongo");
    } else{
        res.status(400);
        throw new Error("Failed to Create the User")
    }
});


//Login Authentication api
const authUser = asyncHandler(async(req, res)=>{
    const { prn, password} = req.body;

    const user = await User.findOne({ prn });
    //console.log(user);

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            prn: user.prn,
            type: user.type,
            //email: user.email,
            pic: user.pic,
            token:generateTokern(user._id),
        })
    } else{
        res.status(400);
        throw new Error("Invalid Email or Password");
    }   
})

const deleteUser = asyncHandler(async(req, res) => {
    const prn = res.body;
    try {
        const user = await User.deleteOne(prn);
        res.json({
            deleted: "true"
        });
     } catch (e) {
        res.status(400);
        throw new Error("User not deleted");
     }
})


module.exports = {registerUser, authUser, deleteUser};