var express = require('express');
var path = require('path');
const Data = require('./serverDataController');
var app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

// serve static assets normally
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/rooms', function (request, res){
  res.send(Data.getData('data.json'));
});

app.get('/confirmation', function (request, res){
  res.redirect('/');
});

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(PORT, function(){
  console.log('Express server is up on port '+PORT);
});
