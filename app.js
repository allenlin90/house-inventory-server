const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const axios = require('axios');
const cors = require('cors');

// register routers
const userRouter = require('./server/routers/user');
app.use(userRouter);
const authRouter = require('./server/routers/auth');
app.use(authRouter);

// set up server port
const port = process.env.PORT || 8080;
// enable to read dotenv
require('dotenv').config();
// enable to read req.body
app.use(express.json());

// root route
app.get('/', (req, res) => {
    res.send(`server is working on port ${port}`);
});

// catch fallback
app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`server starts at port: ${port}`);
})
