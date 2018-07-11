
const express = require('express');
const router = express.Router();
const User = require('../models/userLogin.js');
const bcrypt = require('bcrypt');

router.get('/new', (req, res)=>{
    res.render('sessions/newSession.ejs');
})

router.delete('/logout', (req, res)=>{
    req.session.destroy(() => {
        res.redirect('/books')
    })
});

router.post('/login', (req, res)=>{
    User.findOne({username:req.body.username}, (err, foundUser)=>{
      console.log('whatever')
        if(bcrypt.compareSync(req.body.password, foundUser.password)){
            req.session.currentUser = foundUser;
            res.redirect('/books');
        } else {
            res.send('wrong password');
        }
    })
})

module.exports = router;
