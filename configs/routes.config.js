const express = require('express');
const eventController = require('../controllers/events.controller');

const router = express.Router();

router.get('/create-event', eventController.create);
router.post('/create-event', eventController.doCreate);
router.get('/events', eventController.list);
router.get('/events/:id', eventController.detail)
router.get('/events/:id/delete', eventController.delete)

router.get('/', (req, res, next) => res.redirect('/events'))

module.exports = router;