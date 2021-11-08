const { query } = require('express-validator');

const { authToken } = require('../../../middlewares/authToken');
const { userNotExists } = require('../../../middlewares/databaseValidators');
const { fieldValidation } = require('../../../middlewares/fieldValidation');

const getUserValidators = [
    authToken,
    query('userId').optional().isMongoId(),
    query('userId').optional().custom(userNotExists),
    query('subscribers').optional().isBoolean(),
    query('subscriptions').optional().isBoolean(),
    fieldValidation
];

module.exports = getUserValidators;
