const test = require('node:test');
const assert = require('node:assert');
const config = require('../src/config');

test('config exposes a service name and version', () => {
  assert.ok(config.serviceName);
  assert.match(config.version, /^\d+\.\d+\.\d+$/);
});
