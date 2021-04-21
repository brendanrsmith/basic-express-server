'use strict';

module.exports = (req, res, next) => {
  console.log('Request Data: ', req.method, req.path);
  next();
};
