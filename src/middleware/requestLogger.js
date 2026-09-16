const config = require('../config');

module.exports = function requestLogger(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    console.log(
      `service=${config.serviceName} release=${config.version} ` +
      `method=${req.method} route=${req.originalUrl} ` +
      `http_status=${res.statusCode} duration_ms=${Date.now() - start} ` +
      `request_id=${req.requestId}`
    );
  });
  next();
};
