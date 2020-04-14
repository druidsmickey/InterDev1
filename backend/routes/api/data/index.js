const router = require('express').Router();
const controller = require('./dataController');

router.get('/cctv', controller.cctv);
router.post('/addcctvs', controller.addcctvs);
router.get('/brand', controller.brand);

module.exports = router;
