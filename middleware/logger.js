

module.exports = function customLogger(req, res, next) {
  const logData = {
    method: req.method,
    path: req.originalUrl,
    timestamp: new Date().toISOString(),
  };

 
  console.log(JSON.stringify(logData));

  next();
};
