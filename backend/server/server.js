const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('../db/mongoose');
const { Post } = require('./model/posts');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.post('/post', (req, res) => {
  const post = new Post(req.body);
  post.save().then(
    (newPost) => {
      res.send(newPost);
    },
    e => res.status(400).send(e),
  );
});

app.get('/:category/react', (req, res) => {
  res.send('React Category');
});
app.get('/:category/redux', (req, res) => {
  res.send(`${req.params.category}`);
});

app.listen(3000, () => console.log('Express is running on port 3000!!'));

module.exports = { app };
