const { query } = require("express-validator");

const { authToken } = require("../../../middlewares/authToken");
const { fieldValidation } = require("../../../middlewares/fieldValidation");

const searchByNameValidators = [
    authToken,
    query('name').not().isEmpty(),
    fieldValidation
];

module.exports = searchByNameValidators;
