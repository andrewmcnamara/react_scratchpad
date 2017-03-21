// server.js
// where your node app starts

var express = require('express'),
    app = express();
    
app.use(express.static('public'));

app.server = app.listen(3000, function() {
  console.log('App listening on port 3000');
})
