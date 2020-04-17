const router = require('express').Router();
const controller = require('./authController');

router.post('/register', controller.register);
router.post('/test', controller.test);
router.post('/login', controller.login);

module.exports = router