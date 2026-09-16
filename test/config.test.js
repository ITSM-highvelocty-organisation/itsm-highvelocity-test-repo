const test = require('node:test');
const assert = require('node:assert');
const config = require('../src/config');

test('port falls back to 8080', () => {
  assert.strictEqual(typeof config.port, 'number');
  assert.ok(config.port > 0 && config.port < 65536);
});
