const express = require('express');
const jwt = require('jsonwebtoken');
const router = new express.Router();
require('dotenv').config();

// token secrets
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

router.post('/user', async (req, res) => {
    res.send('this is create user route');
});

module.exports = router;