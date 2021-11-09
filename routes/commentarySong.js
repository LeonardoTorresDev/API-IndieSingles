const { Router } = require('express');

//PostCommentary Flow and Validators
const postCommentaryFlow = require('../apis/commentarySong/postCommentary/flow');
const postCommentaryValidators = require('../apis/commentarySong/postCommentary/validators');

const router = Router();

router.post('/', postCommentaryValidators, postCommentaryFlow);

module.exports = router;