const { Router } = require('express');

//GetUsers Flow and Validators
const getUsersFlow = require('../apis/user/getUsers/flow');
const getUsersValidators = require('../apis/user/getUsers/validators');

const router = Router();

router.get('/', getUsersValidators, getUsersFlow);

module.exports = router;
