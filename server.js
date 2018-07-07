const express = require('express')
const app = express()
//for heroku port
const PORT = process.env.PORT || 3000;
//for mongoose
const mongoose = require('mongoose')
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/bookshelfapp';
//methodOverride
const methodOverride = require('method-override')

//Middleware - Body Parser
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(methodOverride('_method'));


// Use controllers/books.js
const booksController = require('./controllers/books.js')
app.use(booksController)


// localhost:3000  - this will reroute to `books`
app.get('/', (req, res)=>{
  res.redirect('/books')
  })


//connect to mongoose
mongoose.connect(mongoUri, {useNewUrlParser: true});
mongoose.connection.on('open', ()=>{
  console.log('connected to mongoose!!!!!!!!!!!');
})

//PORT
app.listen(PORT, ()=>{
  console.log('listening....');
})


// CODE GRAVEYARD
