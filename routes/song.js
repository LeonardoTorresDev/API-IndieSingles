const { Router } = require('express');

//PostSong Flow and Validators
const postSongFlow = require('../apis/song/postSong/flow');
const postSongValidators = require('../apis/song/postSong/validators');

//GetSong Flow and Validators
const getSongFlow = require('../apis/song/getSong/flow');
const getSongValidators = require('../apis/song/getSong/validators');

const router = Router();

router.post('/', postSongValidators, postSongFlow);
router.get('/', getSongValidators, getSongFlow);

module.exports = router;
