const User = require('../../../schemas/User');

const { encryptPassword, generateJWT } = require('../../../utils/utils');
const { errorResponse } = require('../../../utils/responses');

const createUserFlow = async (req, res) => {

    const {
        name,
        email,
        password
    } = req.body;

    const user = new User({
        name,
        email,
        password,
        createdAt: Date.now(),
        updatedAt: Date.now()
    });

    try {

        user.password = encryptPassword(password);

        await user.save();
        const token = await generateJWT(user._id);

        return res.status(201).json({
            ok: true,
            message: "User created successfully",
            token
        });

    } catch (error) {
        console.log(error)
        return errorResponse(res, "User creation failed: contact administrator", error, 500);
    }

}

module.exports = createUserFlow;
