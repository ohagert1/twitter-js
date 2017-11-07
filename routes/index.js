const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank')

const locals = {
  title: 'TEST',
  people: [
    { name: 'TEST NAME' },
    { name: 'ANOTHER NAME' }
  ]
};

router.use((req, res, next) => {
  console.log(req.method + ' ' + req.path);
  next();
});

router.use(express.static('public'));
// router.use('/stylesheets/style.css', (req, res) => {
//   res.sendFile('/Users/MLegocki/Fullstack/Workshop/twitter-js/public/stylesheets/style.css');
// });

router.get('/', (req, res) => {
  let tweet = tweetBank.list();
  res.render( 'index', { tweets: tweets });
});

module.exports = router;