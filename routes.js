// In routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

module.exports = router;

// In server.js
const routes = require('./routes');
app.use('/', routes);
