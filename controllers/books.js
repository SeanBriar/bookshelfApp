const express = require('express')
const router = express.Router()
const Books = require('../models/books.js')



// ___________________
// 7 Restful Routes
// (via Karolin Rafalski)
// ___________________
// Index  : GET    '/books'          1/7 *
// Show   : GET    '/books/:id'      2/7
// New    : GET    '/books/new'      3/7 *
// Create : POST   '/books'          4/7
// Edit   : GET    '/books/:id/edit' 5/7
// Update : PUT    '/books/:id'      6/7



// Index  : GET    '/books'          1/7
router.get('/books', (req, res)=>{
  Books.find({}, (err, allBooks) =>{
    // res.send(allBooks)
    res.render('books/index.ejs', {books: allBooks})
  })
})


// New    : GET    '/prodcuts/new'      3/7
router.get('/books/new', (req, res)=>{
  res.render('books/new.ejs')
})


module.exports = router