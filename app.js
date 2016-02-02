var express = require('express'),
	mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;



var bookRouter = express.Router();

bookRouter.route('/Books')
	.get(function(req, res) {
		var query = req.query
		Book.find(query, function finder(err, books){
			if(err) 
				res.status(500).send(err)
			else
				res.json(books);
		})
	})

app.use('/api', bookRouter);

app.get('/', function(req, res){
	res.send('Hello world! With NODEMON');
});

app.listen(port, function(req, res){
	console.log('running on PORT:' + port)
})


