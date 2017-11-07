const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./routes/index');
const app = express();
const port = 3000;
nunjucks.configure('../views');
const views = nunjucks.render('index.html', (err, output) => {
  console.log(output);
});

app.listen(port, () => {
  console.log('server listening');
});

app.use(router);

