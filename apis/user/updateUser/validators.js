const { body } = require('express-validator');

const { uniqueUserName } = require('../../../middlewares/databaseValidators');
const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { authToken } = require('../../../middlewares/authToken');

const loginUserValidators = [
    authToken,
    body('name').optional().isLength({ min: 5, max: 30}).trim().escape(),
    body('name').optional().custom(uniqueUserName),
    body('password').optional().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
    fieldValidation
];

module.exports = loginUserValidators;
