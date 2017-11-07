const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./routes/index');
const app = express();
const port = 3000;


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.listen(port, () => {
  console.log('server listening');
});

app.use(router);

