'use strict';

// 404 Error Handler
module.exports = (req, res, next) => {
  
  const errorObj = {
    status: 404,
    message: 'Sorry, we could not find what you were looking for',
  };
  // Send a 404 and the error object
  res.status(404).json(errorObj);
};