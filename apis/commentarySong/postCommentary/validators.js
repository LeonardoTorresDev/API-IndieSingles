const { body } = require('express-validator');

const { authToken } = require('../../../middlewares/authToken');
const { songNotExists } = require('../../../middlewares/databaseValidators');
const { fieldValidation } = require('../../../middlewares/fieldValidation');

const postCommentaryValidators = [
    authToken,
    body('songId').isMongoId(),
    body('songId').custom(songNotExists),
    body('commentary').isLength({ min: 1, max: 50}).trim(),
    fieldValidation
];

module.exports = postCommentaryValidators;
