const { body } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');

const loginUserValidators = [
    body('email').not().isEmpty(),
    body('password').not().isEmpty(),
    fieldValidation
];

module.exports = loginUserValidators;
