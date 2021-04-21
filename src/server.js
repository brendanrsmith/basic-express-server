'use strict';

// 3rd party modules
const express = require('express');
const app = express();

// interal modules
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

// global middleware
app.use(express.json()); // handles parsing of req.body
app.use(logger); // logs request data to console
app.use(validator); // checks for name query string on request

// catch-all route handles 404 errors
app.use('*', notFound);
// generic server error handler
app.use(serverError);

// export module
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server up on port ${port}`);
    });
  },
};
