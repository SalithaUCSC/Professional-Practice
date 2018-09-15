require('dotenv').config();
var express = require('express');
var app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
mongoose.connect(
    `mongodb://${username}:${password}@ds163700.mlab.com:63700/pp`
).then(() => {
    console.log('Connected')
}
);

const userController = require('./user');
app.use('/user', userController);

app.listen(3001, () => {
    console.log(`ExpressJS server listening to port 3001`);
});