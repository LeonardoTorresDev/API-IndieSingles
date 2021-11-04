const { query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { authToken } = require('../../../middlewares/authToken');
const { userNotExists } = require('../../../middlewares/databaseValidators');
const { userAlreadySubscribed, differentUserSubscribe } = require('../../../middlewares/customValidators');

const subscribeUserValidators = [
    authToken,
    differentUserSubscribe,
    userAlreadySubscribed,
    query('userToSubscribeId').isMongoId(),
    query('userToSubscribeId').custom(userNotExists),
    fieldValidation    
];

module.exports = subscribeUserValidators;
