const express = require('express');
const jwt = require('jsonwebtoken');
const router = new express.Router();
require('dotenv').config(); // fetch values from env

// token secrets
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

// create a user
router.post('/', async (req, res) => {
    try {
        const { firstname, lastname, username, password, email, phone, } = req.body;
    } catch (error) {
        console.log(error);
    }
    res.send(req.body);
});

router.post('/login', async (req, res) => { });

module.exports = router;