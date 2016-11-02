var express = require('express');
var path = require('path')
var app = express();
const PORT = process.env.PORT || 8080;

// serve static assets normally
app.use(express.static(__dirname + '/public'))

app.get('/reserved', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.get('/confirmation', function (request, response){
  response.redirect('/');
});

app.listen(PORT, function(){
  console.log('Express server is up on port '+PORT);
});
