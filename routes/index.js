const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
// const body = require('body-parser');

const locals = {
  title: 'TEST',
  people: [
    { name: 'TEST NAME' },
    { name: 'ANOTHER NAME' }
  ]
};

router.use((req, res, next) => {
  res.on('finish', () => {
    console.log(req.method, req.path, res.statusCode);
  });
  next();
});

router.use(express.static('public'));


router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets });
});

router.get('/users/:name', (req, res) => {
  let name = req.params.name;
  let tweets = tweetBank.find({name: name});
  // console.log('test!',tweets);
  res.render('index', {tweets: tweets, showForm: true, name: req.params.name});
});

router.get('/tweets/:id', (req, res) => {
  let id = Number(req.params.id);
  let tweet = tweetBank.find({id: id});
  res.render('index', {tweets: tweet});
});

router.post('/tweets', (req, res) => {
  let name = req.body.name;
  let text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
