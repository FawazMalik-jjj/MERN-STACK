const express = require('express');
const NodeAddresses = require('./api/NodeAddresses');

const router = express.Router();

router.get('/api/NodeAddresses', (req, res) => {
  const nodeAddresses = NodeAddresses.getAddresses();
  res.json({ nodeAddresses });
});

module.exports = router;
