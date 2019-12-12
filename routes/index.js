const express = require('express');

const home = require('./Home');
const footer = require('./Footer');
const about = require('./About');
const routes = express.Router();

routes.get('/', (req, res, next) => {
  res.status(200).json(home);
});

routes.get('/about/', (req, res, next) => {
  res.status(200).json(about);
});

routes.get('/footer/', (req, res, next) => {
  res.status(200).json(footer);
});

module.exports = routes;
