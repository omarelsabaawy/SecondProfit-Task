// routes/index.js
const express = require('express');
const router = express.Router();
const homeController = require('../Controllers/HomeController');
const profileController = require('../Controllers/ProfileController');
const isAuth = require('../Middlewares/isAuth');

// Define routes
router.get('/', homeController.homePage);
router.get('/profile', isAuth, profileController.profilePage);

module.exports = router;
