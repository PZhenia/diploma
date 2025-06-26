const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.post('/:id', authenticate, (req, res) => {
  const hotelId = parseInt(req.params.id);

  if (!req.user.bookedHotels.includes(hotelId)) {
    req.user.bookedHotels.push(hotelId);
  }

  res.json({ message: 'You have booked this hotel!' });
});

module.exports = router;
