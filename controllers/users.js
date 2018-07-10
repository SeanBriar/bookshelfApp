const express = require('express');
const router = express.Router();
const User = require('../models/userLogin.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res)=>{
    res.render('users/newUser.ejs');
});

router.post('/', (req, res)=>{
  console.log('whoomp');
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser)=>{
        res.redirect('/');
    });
});

module.exports = router;
