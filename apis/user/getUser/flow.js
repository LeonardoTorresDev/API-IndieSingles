const User = require('../../../schemas/User');

const { errorResponse } = require('../../../utils/responses');

const getUserFlow = async(req, res) => {

    let { userId, subscribers, subscriptions } = req.query;

    if(!userId) {
        userId = req.user._id;
    }

    try{

        const user = await User.findById(userId).exec();

        if(subscribers){ 
            await User.populate(
                user,
                {
                    path: 'userSubscribers', 
                    model: 'User' 
                }
            ); 
        }
    
        if(subscriptions){ 
            await User.populate(
                user,
                { 
                    path: 'userSubscriptions', 
                    model: 'User' 
                }
            ); 
        }
    
        return res.send(user);

    }
    catch(error){
        console.log(error);
        return errorResponse(res, "Get user failed: contact database administrator", error, 500);
    }
    


}

module.exports = getUserFlow;
