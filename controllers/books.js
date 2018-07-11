
const express = require('express')
const router = express.Router()
const Books = require('../models/books.js')
const session = require('express-session');



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
  console.log('are you here?');
  console.log(req.session.currentUser);
  Books.find({}, (err, allBooks) =>{
    res.render('books/index.ejs',
    {
      currentUser: req.session.currentUser,
      books: allBooks
    })
  })
})


// New    : GET    '/prodcuts/new'      3/7
router.get('/books/new', (req, res)=>{
  res.render('books/new.ejs')
})

// Create : POST   '/books'          4/7
router.post('/books', (req, res)=>{
  console.log('is it going here?');
  Books.create(req.body, (err, createdBook)=>{
    res.redirect('/books')
  })
})

//About page
router.get('/books/about', (req, res)=>{
  res.render('books/about.ejs')
})

// Show   : GET    '/books/:id'      2/7
router.get('/books/:id', (req, res)=>{
  Books.findById(req.params.id, (err, foundBook)=>{
    res.render('books/show.ejs', {books: foundBook})
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

// Edit   : GET    '/books/:id/edit' 5/7
router.get('/books/:id/edit', (req, res)=>{
  Books.findById(req.params.id, (err, foundBook)=>{
    res.render('books/edit.ejs', {books: foundBook})
  })
})

// seed route
router.get('/seed/newbooks', (req, res) => {
  const newBooks =
  [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      img: 'http://hhsmediaweb.weebly.com/uploads/1/3/0/3/13036594/9899555.jpg',
      synopsis: 'Scout Finch is growing up under extraordinary circumstances in a 1930s sleepy Alabama town of Maycomb.'
    },
    {
      title: 'In the Forest of the Night',
      author: 'Amelia Atwater-Rhodes',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/In_the_Forests_of_the_Night_cover.jpg/220px-In_the_Forests_of_the_Night_cover.jpg',
      synopsis: 'Tells the story of a three-hundred-year-old vampire named Risika and her struggles throughout her life, both before and after she was transformed. '
    },
    {
      title: 'Dawn',
      author: 'Octavia E. Butler',
      img: 'https://sites.tufts.edu/femscifibyanna/files/2015/11/img091.jpg',
      synopsis: 'Hundreds of years after atomic fire killed her family, Lilith Iyapo awakes, deep in the hold of a massive alien spacecraft piloted by the Oankali—who arrived just in time to save humanity from extinction.'
    },
    {
      title: 'Oryx and Crake',
      author: 'Maraget Atwood',
      img: 'https://files.ebook.bike/cover/12705061660836.png',
      synopsis: 'Post-apocalyptic "Snowman" attempts to survive the distruction of the earth near a group of primitive human-like creatures. Flashbacks reveal that Snowman was once a boy named Jimmy who grew up in a world dominated by multinational corporations and privileged compounds for the families of their employees.'
    },
    {
      title: 'His Dark Materials Series',
      author: 'Phillip Pullman',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51dum6TvBYL._SX343_BO1,204,203,200_.jpg',
      synopsis: 'Two ordinary children on a perilous journey through shimmering haunted otherworlds.'
    },
    {
      title: 'We Should All Be Feminists',
      author: 'Chimamanda Ngozi Adichie',
      img: 'https://www.greenwomanstore.com/media/Books/PCW/BookCovers/Non-Fiction/We-should-all-be-feminists-chimamanda-ngozi-adichie3.jpg',
      synopsis: 'With humor and levity, here Adichie offers readers a unique definition of feminism for the twenty-first century—one rooted in inclusion and awareness.'
    }
  ]


  Books.create(newBooks, (err, book) => {
    if (err) { console.log(err) }
    console.log('seeded')
    res.redirect('/books')
  })
})



module.exports = router
