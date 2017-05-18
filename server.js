var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

function forceSSL(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.use(forceSSL);

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')));

// Always return the main index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});