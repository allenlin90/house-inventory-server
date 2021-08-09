const jwt = require('jsonwebtoken');

const auth = async function (req, res, next) {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const { type, userId, } = jwt.verify(token, process.env.JWT_SECRET);



        next();
    } catch (error) {
        res.status(401).send({
            resCode: 401,
            error: 'Please authenticate',
            errorMessage: error
        });
    }
}

module.exports = auth;