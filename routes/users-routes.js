const express = require('express');
const {check} = require('express-validator');
const router = express.Router();

const { createUser, signInHandler} = require('../controllers/users-controller')


router.post('/signup',[
    check('username').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
], createUser);
router.post('/signin', signInHandler);
module.exports = router;