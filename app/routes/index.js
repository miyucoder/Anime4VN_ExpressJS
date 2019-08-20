const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const authMiddleware = require('../middlewares/auth');
const adminMiddleware = require('../middlewares/admin');

router.get('/', authMiddleware.checkAuth, adminMiddleware.checkAdmin, controller.index);
router.get('/:url/', authMiddleware.checkAuth, adminMiddleware.checkAdmin, controller.info);

module.exports = router;