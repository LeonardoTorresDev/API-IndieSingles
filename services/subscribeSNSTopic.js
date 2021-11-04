const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});

const subscribeSNSTopic = ( topicArn, emailAddress ) => {

    var params = {
        Protocol: 'EMAIL',
        TopicArn: topicArn, 
        Endpoint: emailAddress
    };

    var subscribePromise = new AWS.SNS({apiVersion: '2010-03-31'}).subscribe(params).promise();

    subscribePromise.then(
        function(data) {
            console.log(data);
            console.log("Subscription ARN is " + data.SubscriptionArn);
    }).catch(
        function(err) {
            console.error(err, err.stack);
    });

}

module.exports = {
   subscribeSNSTopic 
};
