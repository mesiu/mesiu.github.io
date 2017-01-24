var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/dist', express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname
  });
});

app.listen(port, function() {
  console.log('Server listening on http://localhost:%s', port);
});
