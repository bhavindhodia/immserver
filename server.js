const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
const ip = require('ip');
//Load env vars
dotenv.config({
  path: './config/config.env'
});

const app = express();

const PORT = process.env.PORT || 5000;
// const IP = process.env.IP;
const ipadd = ip.address();
const NODE_ENV = process.env.NODE_ENV;

app.get('/post/', (req, res) => {
  const dummyPost = {
    title: "Here's a blog post title",
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };

  const posts = Array(4).fill(dummyPost);
  res.json(posts);
});

app.use('/api/v1/', routes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, ipadd, () =>
  console.log(`Server is listening in ${NODE_ENV} on ${ipadd}:${PORT}!`)
);
