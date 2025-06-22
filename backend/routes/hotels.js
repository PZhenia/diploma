const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  res.json(db.hotels);
});

router.get('/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  const hotel = db.hotels.find(c => c.id === parseInt(req.params.id));
  if (!hotel) return res.status(404).json({ message: 'Hotel not found' });

  res.json(hotel);
});

module.exports = router;
