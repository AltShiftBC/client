const express = require('express');
const router = express.Router();

let {
    getSignup,
    postSignup,
    getLogin,
    postLogin,
    getHome
} = require('../controllers/authController.js');


router.get('/signup/', getSignup);
router.post('/signup/', postSignup);
router.get('/login/', getLogin);
router.post('/login/', postLogin);
router.get('/home/', getHome);

module.exports = router;