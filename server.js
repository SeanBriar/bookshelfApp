const express = require('express')
// const methodOverride = require('methodOverride')
const app = express()
//for heroku port
const PORT = process.env.PORT || 3000;


//for mongoose
const mongoose = require('mongoose')
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';

//Middleware - Body Parser
app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));
// app.use(express.static('public'))


// use controllers/books.js
const booksController = require('./controllers/books.js')
app.use(booksController)


//PORT
app.listen(PORT, ()=>{
  console.log('listening....');
})

//connect to mongoose
mongoose.connect(mongoUri, {useNewUrlParser: true});
mongoose.connection.on('open', ()=>{
  console.log('connected to mongoose!!!!!!!!!!!');
})
