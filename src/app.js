const express = require('express');
const requestContext = require('./middleware/requestContext');
const health = require('./routes/health');
const items = require('./routes/items');

const app = express();
app.use(express.json());
app.use(requestContext);
app.use(health);
app.use('/api', items);

module.exports = app;
