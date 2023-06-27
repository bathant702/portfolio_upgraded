const express = require('express');
const router = express.Router();
const routesController = require('../../controller/api/routes')

// BASE URL: /routes/api
router.get('/', routesController.index)

module.exports = router;