
const { validationResult } = require('express-validator');

//Checks errors on validators, if one is founded then send an error to client
const fieldValidation = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
    
}

module.exports = {
    fieldValidation
}
