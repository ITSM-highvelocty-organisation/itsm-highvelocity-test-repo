const pkg = require('../../package.json');

module.exports = {
  serviceName: pkg.name,
  version: pkg.version,
  port: Number(process.env.PORT || 8080),
  environment: process.env.NODE_ENV || 'development',
};
