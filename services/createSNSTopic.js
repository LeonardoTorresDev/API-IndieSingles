const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});

const createSNSTopic = topicName => {

    // Create promise and SNS service object
    let createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: topicName}).promise();

    // Handle promise's fulfilled/rejected states
    return createTopicPromise.then(
        (payload) => {
            console.log("Topic ARN is " + payload.TopicArn);
            return payload.TopicArn;
    }).catch(
        (err) => {
            console.error(err, err.stack);
    });
 
}

module.exports = {
    createSNSTopic
};
