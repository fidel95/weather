const express = require('express');
const controller = require('./controllers/controller');

const router = express.Router();

/* Routes */
router.get('/', controller.renderHomePage);
router.post('/', controller.getWeather);

router.get('/about', controller.renderAboutPage);

module.exports = router;
