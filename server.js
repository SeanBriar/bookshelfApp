const express = require('express')
const app = express()
//for heroku port
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('this works...')
})

app.listen(PORT, ()=>{
  console.log('listening....');
})
