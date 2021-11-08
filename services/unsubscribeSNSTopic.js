var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});

const unsubscribeSNSTopic = async(topicArn, userToUnsubscribeEmail) => {

    const subscriptions = await listSubscriptions(topicArn);

    const subscriptionArn = getSubscriptionArn(subscriptions, userToUnsubscribeEmail);

    if(subscriptionArn != 'PendingConfirmation'){
        unsubscribeTopic(subscriptionArn);
    }
     
}

const listSubscriptions = async topicArn => {

    const params = {
        TopicArn : topicArn
    }

    var subslistPromise = new AWS.SNS({apiVersion: '2010-03-31'}).listSubscriptionsByTopic(params).promise();

    return subslistPromise.then(
        (data) => {
            return data.Subscriptions;
        }).catch(
        (err) => {
            console.error(err, err.stack);
        }
    );

}


const getSubscriptionArn = (subscriptions, email) => {

    let subscriptionArn = '';

    for(let subscription of subscriptions) {
        if (subscription.Endpoint === email){
            subscriptionArn = subscription.SubscriptionArn;
            break;
        }
    }

    return subscriptionArn;

}

const unsubscribeTopic = subscriptionArn => {

    var subscribePromise = new AWS.SNS({apiVersion: '2010-03-31'}).unsubscribe({SubscriptionArn : subscriptionArn }).promise();

    subscribePromise.then(
        (data) => {
            console.log(data);
        }).catch(
        (err) => {
            console.error(err, err.stack);
        }
    );

}


module.exports = {
    unsubscribeSNSTopic
};
