const { Router } = require('express');

//SearchNames Flow and Validators
const searchByNameFlow = require('../apis/search/searchByName/flow');
const searchByNameValidators = require('../apis/search/searchByName/validators');

const router = Router();

router.get('/name', searchByNameValidators, searchByNameFlow);

module.exports = router;