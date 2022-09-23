var express = require('express');
var router = express.Router();
const signupController = require('../controller/signupController');

/* Signup user */
router.post('/signup', signupController.signup);

/* Login User */
router.post('/login', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
