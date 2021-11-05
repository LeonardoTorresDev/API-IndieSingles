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
    body('name').not().isEmpty().trim().escape(),
    body('description').not().isEmpty().trim().escape(),
    body('genre').not().isEmpty().trim().escape(),
    fieldValidation
];

module.exports = postSongValidators;
