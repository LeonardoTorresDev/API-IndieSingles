const { Router } = require('express');

//SearchNames Flow and Validators
const searchNamesFlow = require('../apis/search/searchNames/flow');
const searchNamesValidators = require('../apis/search/searchNames/validators');

const router = Router();

router.get('/name', searchNamesValidators, searchNamesFlow);

module.exports = router;