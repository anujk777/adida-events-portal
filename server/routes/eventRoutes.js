const express = require('express');
const router = express.Router();
const { getEvents, createEvent } = require('../controllers/eventController');

router.route('/')
    .get(getEvents)
    .post(createEvent);

// You would add PUT /api/events/:id and DELETE /api/events/:id here

module.exports = router;