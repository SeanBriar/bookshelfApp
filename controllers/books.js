const express = require('express')
const router = express.Router()
const Books = require('../models/bookModels.js')

//Index
router.get('/books/', (req, res)=>{
    res.render('books/index.ejs')
})







module.exports = router
