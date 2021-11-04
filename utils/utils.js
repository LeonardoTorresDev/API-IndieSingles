const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validImageExtensions = [ 'jpg', 'jpeg', 'png'];

const encryptPassword = password => {
    const salt = bcryptjs.genSaltSync();
    return bcryptjs.hashSync(password, salt);
}

const generateJWT = id => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRATION_DATE
        }, (err, token) => {
            if (err) {
                reject("Couldn't generate token");
            } else {
                resolve(token);
            }
        });
    });
}


const imageExtensionValidator = fileName => {

    let extension = fileName.split('.');
    extension = extension[extension.length -1];

    if(validImageExtensions.includes(extension)){
        return true;
    }

}

const fileToBase64 = (mimetype, buffer ) => {

    const base64Buffer = Buffer.from(buffer).toString('base64');
    return 'data:' + mimetype + ';base64,' + base64Buffer;
 
}

const standardTopicName = userName => {
    userName = userName.replace(' ', '_');
    return userName + '_topic';
}

module.exports = {
    encryptPassword,
    generateJWT,
    imageExtensionValidator,
    fileToBase64,
    standardTopicName
};
