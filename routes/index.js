const express = require('express');
const router  = express.Router();

const user = require('./user');
const song = require('./song');
const commentarySong = require('./commentarySong');

const users = require('./users');
const songs = require('./songs');

router.use('/user', user);
router.use('/song', song);
router.use('/commentarySong', commentarySong);

router.use('/users', users);
router.use('/songs', songs);

module.exports = router;
