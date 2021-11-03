const bcryptjs = require('bcryptjs');

const User = require('../../../schemas/User');

const { generateJWT } = require('../../../utils/utils');
const { customErrorResponse, errorResponse } = require('../../../utils/responses');

const loginUserFlow = async (req, res) => {

    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email }).exec();

        if (!user) {
            return customErrorResponse(res, "User not found", 400);
        }

        const validPassword = bcryptjs.compareSync( password, user.password);
        
        if (!validPassword) {
            return customErrorResponse(res, "Invalid password", 401);
        }

        const token = await generateJWT(user._id);

        return res.json({
            ok: true,
            token
        });

    } catch (error) {
        console.log(error);
        errorResponse(res, "Contact database administrator", error, 500);
    }
}

module.exports = loginUserFlow;
