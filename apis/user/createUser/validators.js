const { body } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');
const { uniqueUserEmail, uniqueUserName } = require('../../../middlewares/databaseValidators');

const createUserValidators = [
    body('name').isLength({ min: 5, max: 30}).trim().escape(),
    body(
        'password',
        'Password has to contain one digit, one lower, one upper and has to be eight characters long'
    )
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
    body('email', 'Invalid email').isEmail().normalizeEmail(),
    body('name').custom(uniqueUserName),
    body('email').custom(uniqueUserEmail),
    fieldValidation
]

module.exports = createUserValidators;
