const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');

app.listen(port, () => {
  console.log('server listening');
});

app.use(router);
