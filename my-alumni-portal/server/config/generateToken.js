const jwt = require('jsonwebtoken');

const generateTokern = (id) =>{
    return jwt.sign({id}, "kshitij",{
        expiresIn: "30d",
    });
};

module.exports = generateTokern;