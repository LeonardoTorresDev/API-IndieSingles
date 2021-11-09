const { body } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { uniqueUserEmail, uniqueUserName } = require('../../../middlewares/databaseValidators');

const postUserValidators = [
    body('name').isLength({ min: 3, max: 40}).trim(),
    body(
        'password',
        'Password has to contain one digit, one lower, one upper and has to be eight characters long'
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
    body('email', 'Invalid email').isEmail(),
    body('name').custom(uniqueUserName),
    body('email').custom(uniqueUserEmail),
    fieldValidation
]

module.exports = postUserValidators;
