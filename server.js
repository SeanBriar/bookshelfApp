const express = require('express')
const app = express()
//for heroku port
const PORT = process.env.PORT || 3000;

//for mongoose
const mongoose = require('mongoose')
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';


//TEST ROUTE
app.get('/', (req, res)=>{
    res.send('this works...')
})

//PORT
app.listen(PORT, ()=>{
  console.log('listening....');
})

//connect to mongoose
mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('connected to mongoose!!!!!!!!!!!');
})
