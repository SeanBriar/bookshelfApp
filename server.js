const express = require('express')
const app = express()
//for heroku port
const PORT = process.env.PORT || 3000;
//for mongoose
const mongoose = require('mongoose')
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/bookshelfapp';
//methodOverride
const methodOverride = require('method-override')
const Books = require('./models/books.js')


//Middleware - Body Parser
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
app.use(methodOverride('_method'));

//sessions
const session = require('express-session');
app.use(session({
	  secret: "alpaclettes",
	  resave: false,
	  saveUninitialized: false
}));

app.get('/', (req, res)=>{
	Books.find({}, (err, allBooks) =>{
    res.render('books/index.ejs',
			{
				  currentUser: req.session.currentUser,
					books: allBooks
	    }
		);
	})
});

app.get('/authtest', (req, res)=>{
	res.send(req.session)
})

app.get('/app', (req, res)=>{
    if(req.session.currentUser){
        res.send('the main app');
    } else {
        res.redirect('/sessions/new');
    }
})

const userController = require('./controllers/users.js')
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

// Use controllers/books.js
const booksController = require('./controllers/books.js')
app.use(booksController)


// localhost:3000  - this will reroute to `books`
app.get('/', (req, res)=>{
  console.log('reroute to books');
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
