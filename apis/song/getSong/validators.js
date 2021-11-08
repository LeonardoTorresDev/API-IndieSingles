const { query } = require('express-validator');

const { authToken } = require('../../../middlewares/authToken');
const { songNotExists } = require('../../../middlewares/databaseValidators');
const { fieldValidation } = require('../../../middlewares/fieldValidation');

const getSongValidators = [
    authToken,
    query('songId').isMongoId(),
    query('songId').custom(songNotExists),
    fieldValidation
];

module.exports = getSongValidators;
