const { Router } = require('express');

//PostSong Flow and Validators
const postSongFlow = require('../apis/song/postSong/flow');
const postSongValidators = require('../apis/song/postSong/validators');

//GetSong Flow and Validators
const getSongFlow = require('../apis/song/getSong/flow');
const getSongValidators = require('../apis/song/getSong/validators');

//DeleteSong Flow and Validators
const deleteSongFlow = require('../apis/song/deleteSong/flow');
const deleteSongValidators = require('../apis/song/deleteSong/validators');

const router = Router();

router.post('/', postSongValidators, postSongFlow);
router.get('/', getSongValidators, getSongFlow);

router.delete('/', deleteSongValidators, deleteSongFlow);

module.exports = router;
