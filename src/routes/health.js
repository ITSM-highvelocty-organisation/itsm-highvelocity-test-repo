const express = require('express');
const config = require('../config');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: config.serviceName, version: config.version });
});

router.get('/readiness', (req, res) => {
  res.json({ status: 'ready', environment: config.environment });
});

module.exports = router;
