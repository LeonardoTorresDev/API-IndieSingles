const { body } = require('express-validator');

const { authToken } = require('../../../middlewares/authToken');
const { fieldValidation } = require('../../../middlewares/fieldValidation');

const { 
    fileValidator, 
    imageExtensionMiddleware, 
    songValidator, 
    audioExtensionMiddleware 
} = require('../../../middlewares/customValidators');

const postSongValidators = [
    authToken,
    fileValidator,
    imageExtensionMiddleware,
    songValidator,
    audioExtensionMiddleware,
    body('name').not().isEmpty().trim(),
    body('description').not().isEmpty().trim(),
    body('genre').not().isEmpty().trim(),
    fieldValidation
];

module.exports = postSongValidators;
