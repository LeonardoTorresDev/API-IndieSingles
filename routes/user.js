const { Router } = require('express');

//CreateUser Flow and Validators
const createUserFlow = require('../apis/user/createUser/flow');
const createUserValidators = require('../apis/user/createUser/validators');

//Login Flow and Validators
const loginUserFlow = require('../apis/user/loginUser/flow');
const loginUserValidators = require('../apis/user/loginUser/validators');

//UpdateUser Flow and Validators
const updateUserFlow = require('../apis/user/updateUser/flow');
const updateUserValidators = require('../apis/user/updateUser/validators');

const router = Router();

router.post('/', createUserValidators, createUserFlow);
router.post('/login', loginUserValidators, loginUserFlow);

router.put('/', updateUserValidators, updateUserFlow);

module.exports = router;
