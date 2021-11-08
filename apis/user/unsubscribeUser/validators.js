const { query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { authToken } = require('../../../middlewares/authToken');
const { userNotExists } = require('../../../middlewares/databaseValidators');
const { userIsNotSubscribed, differentUserUnsubscribe } = require('../../../middlewares/customValidators');

const unsubscribeUserValidators = [
    authToken,
    query('userToUnsubscribeId').isMongoId(),
    query('userToUnsubscribeId').custom(userNotExists),
    fieldValidation,
    differentUserUnsubscribe,
    userIsNotSubscribed
];

module.exports = unsubscribeUserValidators;
