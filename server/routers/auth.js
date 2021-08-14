const express = require('express');
const axios = require('axios');
const router = new express.Router();
require('dotenv').config();

// token secrets
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

router.post('/line/params', (req, res) => {
    const params = {
        lineStateParam: (new Date().getTime()) + (Math.floor(Math.random() * 900) + 100).toString(),
        lineNonce: (new Date().getTime()) + (Math.floor(Math.random() * 900) + 100).toString(),
    };
    res.send(JSON.stringify(params));
});

router.post('/line', async (req, res) => {
    const { code, returnedState } = req.body;
    const timestamp = returnedState.slice(0, returnedState.length - 3);
    const timegap = (new Date().getTime() - new Date(parseInt(timestamp))) / (1000 * 60);
    if (timegap < 15) { // if the request is verified in 15 mins
        const options = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': process.env.LINE_REDIRECT_URI,
            'client_id': process.env.LINE_CLIENT_ID,
            'client_secret': process.env.LINE_CLIENT_SECRET
        };

        const params = createQueryString(options);

        try {
            const response = await axios('https://api.line.me/oauth2/v2.1/token', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(params)
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
            res.status(error.response.status || 400).send(error.response.data || `invalid request`);
        }
    } else {
        res.status(401).send('session expired');
    }
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

function createQueryString(options = {}) {
    if (Object.keys(options).length) {
        const results = Object.entries(options).reduce((string, entry) => {
            if (string) {
                string += `&${entry[0]}=${entry[1]}`;
            } else {
                string += `${entry[0]}=${entry[1]}`;
            }
            return string;
        }, '');
        return results;
    }
}