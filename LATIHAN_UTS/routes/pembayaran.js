const express = require('express');
const router = express.Router();
const pembayaranController = require('../controllers/pembayaranController');

router.get('/', pembayaranController.index);

router.post('/insert', pembayaranController.insert);

module.exports = router;
