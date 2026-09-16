const express = require('express');
const store = require('../repositories/itemRepository');

const router = express.Router();

router.get('/items', (req, res) => {
  res.json({ items: store.list() });
});

router.get('/items/:id', (req, res) => {
  const item = store.find(req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'item_not_found', id: req.params.id });
  }
  return res.json(item);
});

module.exports = router;
