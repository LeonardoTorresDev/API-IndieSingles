const { query } = require('express-validator');

const { fieldValidation } = require('../../../middlewares/fieldValidation');

const getUserValidators = [
    query("from", "From has to be a positive integer").optional().isInt({ min: 0 }),
    query("limit", "Limit has to be a negative integer").optional().isInt({ min: 0 }),
    fieldValidation
];

module.exports = getUserValidators;
