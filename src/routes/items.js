const express = require('express');
const store = require('../repositories/itemRepository');

const router = express.Router();

router.get('/items', (req, res) => {
  res.json({ items: store.list() });
});

module.exports = router;
