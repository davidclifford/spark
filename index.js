'use strict';

const bodyParser = require('body-parser');
const app = require('express')();
const basicAuth = require('express-basic-auth');

process.on('uncaughtException', function(error) {
  console.dir(error);
  console.log('uncaughtException');

  if (error.stack) console.log(error.stack);
});

app.use(basicAuth({
    users: { 'spark': 'testing1' }
}))

app.use(bodyParser.json());

app.use('/movies', require('./api/routes/movie-routes'));

const port = 3000;
app.listen(process.env.PORT || port);
console.log('Server listening on port: ' + port);