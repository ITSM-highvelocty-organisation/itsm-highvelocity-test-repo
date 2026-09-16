const pkg = require('../../package.json');

const port = Number(process.env.PORT || 8080);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`PORT must be a valid TCP port, got: ${process.env.PORT}`);
}

module.exports = {
  serviceName: pkg.name,
  version: pkg.version,
  port,
  environment: process.env.NODE_ENV || 'development',
};
