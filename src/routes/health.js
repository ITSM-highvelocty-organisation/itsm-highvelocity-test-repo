const express = require('express');
const config = require('../config');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: config.serviceName, version: config.version });
});

module.exports = router;
