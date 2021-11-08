const { Router } = require('express');

//GetSongs Flow and Validators
const getSongsFlow = require('../apis/song/getSongs/flow');
const getSongsValidators = require('../apis/song/getSongs/validators');

const router = Router();

router.get('/', getSongsValidators, getSongsFlow);

module.exports = router;
