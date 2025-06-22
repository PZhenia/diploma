const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

router.post('/:id', authenticate, (req, res) => {
  const courseId = parseInt(req.params.id);

  if (!req.user.bookedHotels.includes(courseId)) {
    req.user.bookedHotels.push(courseId);
  }

  res.json({ message: 'You have booked this hotel!' });
});

module.exports = router;
