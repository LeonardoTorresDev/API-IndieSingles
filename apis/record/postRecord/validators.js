const { body } = require('express-validator');
const { validRecordType, fileValidator, imageExtensionMiddleware } = require('../../../middlewares/customValidators');

const { fieldValidation } = require('../../../middlewares/fieldValidation');

const postRecordValidators = [
    fileValidator,
    imageExtensionMiddleware,
    body('name').not().isEmpty().trim().escape(),
    body('type').custom(validRecordType),
    fieldValidation
]

module.exports = postRecordValidators;
