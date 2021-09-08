const jwt = require('jsonwebtoken');
require('dotenv').config();

// simply check if the token is valid as signed by token secret
const auth = async function (req, res, next) {
    const token = req.header('Authorization').split(' ')[1]; // bearer <token>
    if (!token) return res.status(401).send('unauthorized');
    try {
        const { userId, } = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = userId;
        next();
    } catch (error) {
        res.status(400).send('invalid token');
    }
}

module.exports = auth;