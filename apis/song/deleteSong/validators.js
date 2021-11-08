const { query } = require('express-validator');

const { authToken } = require('../../../middlewares/authToken');
const { sameSongAuthor } = require('../../../middlewares/customValidators');
const { songNotExists } = require('../../../middlewares/databaseValidators');
const { fieldValidation } = require('../../../middlewares/fieldValidation');

const deleteSongValidators = [
    authToken,
    query('songId').isMongoId(),
    query('songId').custom(songNotExists),
    fieldValidation,
    sameSongAuthor
];

module.exports = deleteSongValidators;
