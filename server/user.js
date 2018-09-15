const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = mongoose.model('User', {
    username: String,
    password: String,
    name: String,
    role: String
});

router.get('', (req, res) => {
    res.send('Test');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    User.findOne({ username: req.body.username }, (err, data) => {
        if (data) {
            if (req.body.password === data.password) {
                res.send('Hello');
            }
        }
    });
});

module.exports = router;

