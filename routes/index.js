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
  console.log(req.method + ' ' + req.path);
  next();
});

router.use(express.static('public'));


router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets });
});

router.get('/users/:firstname%20:lastname', (req, res) => {
  let name = req.params.firstname + ' ' + req.params.lastname;
  let tweets = tweetBank.find({name: name});
  // console.log('test!',tweets);
  res.render('index', {tweets: tweets, showForm: true, name: name});
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
