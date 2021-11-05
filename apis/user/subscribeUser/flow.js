const mongoose = require('mongoose');

const User = require('../../../schemas/User');

const { subscribeSNSTopic } = require('../../../services/subscribeSNSTopic');
const { customResponse, errorResponse }= require('../../../utils/responses');

const subscribeUserFlow = async (req, res) => {

    const { userToSubscribeId } = req.query;
    const user = req.user;

    const session = await mongoose.startSession();
    session.startTransaction();

    try{

        await User.findByIdAndUpdate(user._id,{ 
            $addToSet : { 
                userSubscriptions: userToSubscribeId 
            },
            updatedAt: Date.now() 
        }, { new: true}).exec();

        const userToSubscribe = await User.findByIdAndUpdate(userToSubscribeId,{
            $addToSet : { 
                userSubscribers: user._id 
            },
            updatedAt: Date.now()
        }, { new: true}).exec(); 

        subscribeSNSTopic(userToSubscribe.topicArn, user.email);

        session.commitTransaction();
        customResponse(res, "Subscription done successfully, please confirm in your email");

    }
    catch(error){
        await session.abortTransaction();
        console.log(error);
        errorResponse(res,"Contact database administrator",error,500);
    }
    finally{
        session.endSession();
    }
}

module.exports = subscribeUserFlow;
