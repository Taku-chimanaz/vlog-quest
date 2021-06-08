const express = require('express');
const router = express.Router();
const generalController = require('../controllers/generalController');


router.get('/', generalController.index);

router.get('/profile', generalController.profile);

router.get('/user-dashboard', generalController.userDashboard);

router.get('scheduled-posts', generalController.scheduledPosts);

module.exports = router;

