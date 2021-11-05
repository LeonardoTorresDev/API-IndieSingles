const mongoose = require('mongoose');

const User = require('../../../schemas/User');
const { unsubscribeSNSTopic } = require('../../../services/unsubscribeSNSTopic');
const { customResponse, errorResponse } = require('../../../utils/responses');

const unsubscribeUserFlow = async (req, res) => {

    const { userToUnsubscribeId } = req.query;
    const user = req.user;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {

        await User.findByIdAndUpdate(user._id, {
            $pull: {
                userSubscriptions: userToUnsubscribeId
            },
            updatedAt: Date.now()
        }).exec();

        const userToUnsubscribe = await User.findByIdAndUpdate(userToUnsubscribeId, {
            $pull: {
                userSubscribers: user._id
            },
            updatedAt: Date.now()
        }).exec();

        unsubscribeSNSTopic(userToUnsubscribe.topicArn, user.email);

        session.commitTransaction();
        return customResponse(res, "Subscription removed successfully");

    } catch (error) {
        console.log(error);
        await session.abortTransaction();
        errorResponse(res, "Contact database administrator", error, 500);
    } finally {
        session.endSession();
    }

}

module.exports = unsubscribeUserFlow;
