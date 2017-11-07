const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./routes/index');
const app = express();
const port = 3000;



const locals = {
  title: 'TEST',
  people: [
    { name: 'TEST NAME'},
    { name: 'ANOTHER NAME'}
  ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use('/', (req, res, next) => {
  res.render('index', { title: locals.title , people: locals.people});
  next();
});


app.listen(port, () => {
  console.log('server listening');
});

app.use(router);

