const express = require('express');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const router = new express.Router();
require('dotenv').config(); // fetch values from env

// token secrets
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

// create a user
/*
    1. validate inputs
    2. check if the user exists by checking both email and OAuth IDs
    3. store user password
        3.1 hash password by bcrypt
        3.2 create random one and hash by bcrypt if user uses OAuth
    4. create user in database
    5. validate user information (choose on of the followings)
        5.1 send user verification email to validate email
        5.2 send user sms OTP to validate phone number
*/
router.post('/', async (req, res) => {
    try {
        const { firstname, lastname, username, password, email, phone, } = req.body;
    } catch (error) {
        console.log(error);
    }
    res.send(req.body);
});

/*
    1. validate inputs
    2. check if user exists
    3. validate user login
        3.1 verify password by bcrypt
        3.2 check if user is authorized by OAuth
    4. generate, sign, and return jwt token to user
        4.1 HTTP header
        4.2 HTTP server-side generated cookie
        4.3 response body
*/
router.post('/login', async (req, res) => { });

module.exports = router;