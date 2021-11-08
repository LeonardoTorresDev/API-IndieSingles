const { Router } = require('express');

//PostUser Flow and Validators
const postUserFlow = require('../apis/user/postUser/flow');
const postUserValidators = require('../apis/user/postUser/validators');

//Login Flow and Validators
const loginUserFlow = require('../apis/user/loginUser/flow');
const loginUserValidators = require('../apis/user/loginUser/validators');

//UpdateUser Flow and Validators
const updateUserFlow = require('../apis/user/updateUser/flow');
const updateUserValidators = require('../apis/user/updateUser/validators');

//SubscribeUser Flow and Validators
const subscribeUserFlow = require('../apis/user/subscribeUser/flow');
const subscribeUserValidators = require('../apis/user/subscribeUser/validators');

//UnsubscribeUser Flow and Validators
const unsubscribeUserFlow = require('../apis/user/unsubscribeUser/flow');
const unsubscribeUserValidators = require('../apis/user/unsubscribeUser/validators');

//GetUser Flow and Validators
const getUserFlow = require('../apis/user/getUser/flow');
const getUserValidators = require('../apis/user/getUser/validators');

const router = Router();

router.post('/', postUserValidators, postUserFlow);
router.post('/login', loginUserValidators, loginUserFlow);

router.put('/', updateUserValidators, updateUserFlow);
router.put('/subscribe', subscribeUserValidators, subscribeUserFlow);
router.put('/unsubscribe', unsubscribeUserValidators, unsubscribeUserFlow);

router.get('/', getUserValidators, getUserFlow);

module.exports = router;
