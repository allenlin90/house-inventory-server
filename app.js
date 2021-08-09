const express = require('express');
const app = express();
const cors = require('cors');

// enable to read req.body as json
app.use(express.json());

// cors security setting
const whitelist = require('./server/config/whitelist.js');
const corsConfig = {
    origin(origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) { // allow server to server or postman requests
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
};
app.use(cors(corsConfig));

// connect to db
const db = require("./server/models/index.js");
db.sequelize.sync();

// register routers
const userRouter = require('./server/routers/user');
app.use('/user', userRouter);
const authRouter = require('./server/routers/auth');
app.use('/auth', authRouter);

// root route
app.get('/', (req, res) => {
    res.send(`server is working on port ${port}`);
});

// catch fallback
app.all('*', (req, res) => {
    res.status(404).send(`This route doesn't exist!`);
})

// set up server port
const port = process.env.PORT || 8080;

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`server starts at port: ${port}`);
})
