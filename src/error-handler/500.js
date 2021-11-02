'use strict';

// 500 Error Handler
module.exports = function (err, req, res, next) {
  const errorObj = {
    status: 500,
    message: err,
    request: req.body,
  };
  // Send a 500 and the error object
  res.status(500).json(errorObj);
};