const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  res.json(db.destinations);
});

module.exports = router;
