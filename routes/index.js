const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.method + ' ' + req.path);
  next();
});

router.get('/test', (req, res) => {
  res.send('WELCOME');
});


module.exports = router;
