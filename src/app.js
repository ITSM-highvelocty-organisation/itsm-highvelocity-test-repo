const express = require('express');
const health = require('./routes/health');
const items = require('./routes/items');

const app = express();
app.use(express.json());
app.use(health);
app.use('/api', items);

module.exports = app;
