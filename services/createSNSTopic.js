const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
});

const createSNSTopic = async topicName => {

    // Create promise and SNS service object
    let createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: topicName}).promise();

    // Handle promise's fulfilled/rejected states
    const data = createTopicPromise.then(
        (data) => {
            console.log("Topic ARN is " + data.TopicArn);
            return data.TopicArn;
    }).catch(
        (err) => {
            console.error(err, err.stack);
    });

    const arn = await data;
    return arn;
 
}

module.exports = {
    createSNSTopic
};
