
const express = require('express')
const router = express.Router()
const Books = require('../models/books.js')



// ___________________
// 7 Restful Routes
// (via Karolin Rafalski)
// ___________________
// Index  : GET    '/books'          1/7 *
// Show   : GET    '/books/:id'      2/7 *
// New    : GET    '/books/new'      3/7 *
// Create : POST   '/books           4/7 *
// Edit   : GET    '/books/:id/edit' 5/7 *
// Update : PUT    '/books/:id'      6/7 *
// Delete : DELETE '/products/:id'   7/7



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

// Create : POST   '/books'          4/7
router.post('/books', (req, res)=>{
  Books.create(req.body, (err, createdBook)=>{
    res.redirect('/books')
  })
})

// Show   : GET    '/books/:id'      2/7
router.get('/books/:id', (req, res)=>{
  Books.findById(req.params.id, (err, foundBook)=>{
    res.render('books/show.ejs', {books: foundBook})
  })
})

// Edit   : GET    '/books/:id/edit' 5/7
router.get('/books/:id/edit', (req, res)=>{
  Books.findById(req.params.id, (err, foundBook)=>{
    res.render('books/edit.ejs', {books: foundBook})
  })
})

// Update : PUT    '/books/:id'      6/7
// the second part to 'edit' - needed to submit changes to database
router.put('/books/:id', (req, res)=>{
  // findByIdAndUpdate(<filter>, <update>, <options>)
  Books.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel)=>{
    res.redirect('/books')
  })
})

// Delete : DELETE '/products/:id'   7/7
router.delete('/books/:id', (req, res)=>{
  Books.findByIdAndRemove(req.params.id, (err, data)=>{
    res.redirect('/books')
  })
})





module.exports = router
