'use strict';

// Create an Express server instance named 'app'
require('dotenv').config();
const express = require('express');
const app = express();

// Localize Middleware Modules
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handler/404');
const serverErrorHandler = require('./error-handler/500');
const drinkRoutes = require('./routes/drink-routes');
const tacoRoutes = require('./routes/taco-routes');

// Attach Middleware
app.use(express.json());
app.use(logger);
app.use(tacoRoutes);
app.use(drinkRoutes);

app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app, // Used by testing
  start: port => { // Takes port from index.js, starts server.
    if(!port) { throw new Error('missing port');}
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  },
};