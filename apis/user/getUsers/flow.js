const User = require('../../../schemas/User');

const { errorResponse } = require('../../../utils/responses');

const getUsersFlow = async (req, res) => {

    let { 
        from = 0, 
        limit = 5
    } = req.query;

    from = Number(from)
    limit = Number(limit)

    try {
        const users = await User.find({})
        .skip(from)
        .limit(limit)
        .exec();
        return res.send(users);
    } catch (error) {
        return errorResponse(res, "Get users failed: contact administrator", error, 500);
    }

}

module.exports = getUsersFlow;
