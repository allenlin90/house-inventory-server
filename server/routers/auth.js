const express = require('express');
const router = new express.Router();
require('dotenv').config();

// token secrets
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

router.post('/auth', (req, res) => {
    res.send('this is to validate a token');
});

module.exports = router;

function validateRequest(req, res, next) {
    const rawToken = req.headers.authorization;
    if (rawToken.includes('Bearer')) {
        const token = rawToken.split(' ')[1];
        const validToken = true;
        if (!validToken) return res.sendStatus(403);
        return next();
    }
    return res.status(401).send('unauthorized');
}

function verifyToken(token = '') {

}