const express = require('express');
const config = require('./config');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 12});
})

app.listen(config.port, function listenHandler() {
  console.log('running on ..' + config.port);
});