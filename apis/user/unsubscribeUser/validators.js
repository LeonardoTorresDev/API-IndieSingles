const { query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { authToken } = require('../../../middlewares/authToken');
const { userNotExists } = require('../../../middlewares/databaseValidators');
const { userIsNotSubscribed, differentUserUnsubscribe } = require('../../../middlewares/customValidators');

const unsubscribeUserValidators = [
    authToken,
    differentUserUnsubscribe,
    userIsNotSubscribed,
    query('userToUnsubscribeId').isMongoId(),
    query('userToUnsubscribeId').custom(userNotExists),
    fieldValidation    
];

module.exports = unsubscribeUserValidators;
