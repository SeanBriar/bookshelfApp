const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema ({
  title: String,
  img: String,
  synopsis: String
})

const Books = mongoose.model('Books', booksSchema)




module.exports = Books
