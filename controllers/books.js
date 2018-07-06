const express = require('express')
const router = express.Router()
const Books = require('../models/books.js')



// ___________________
// 7 Restful Routes
// ___________________
// Index  : GET    '/products'          1/7
// Show   : GET    '/products/:id'      2/7
// New    : GET    '/prodcuts/new'      3/7
// Create : POST   '/products'          4/7
// Edit   : GET    '/products/:id/edit' 5/7
// Update : PUT    '/products/:id'      6/7



// Index  : GET    '/books'          1/7
router.get('/books', (req, res)=>{
  Books.find({}, (err, allBooks) =>{
    res.render('books/index.ejs', {books: allBooks})
  })
})







module.exports = router
