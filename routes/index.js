const express = require('express');
const router  = express.Router();

const user = require('./user');
const song = require('./song');

const users = require('./users');

router.use('/user', user);
router.use('/song', song);
router.use('/users', users);

module.exports = router;
