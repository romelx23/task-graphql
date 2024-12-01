const express = require('express');

const productsRouter = require('./tasks.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/task', productsRouter);
}

module.exports = routerApi;
