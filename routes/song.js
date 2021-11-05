const { Router } = require('express');

//PostSong Flow and Validators
const postSongFlow = require('../apis/song/postSong/flow');
const postSongValidators = require('../apis/song/postSong/validators');

const router = Router();

router.post('/', postSongValidators, postSongFlow);

module.exports = router;
