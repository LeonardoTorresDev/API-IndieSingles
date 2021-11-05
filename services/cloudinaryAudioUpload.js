const cloudinary = require('cloudinary').v2;

const { fileToBase64 } = require('../utils/utils');

cloudinary.config( process.env.CLOUDINARY_URL );

const cloudinaryAudioUpload = async file  => {

    const audioBase64 = fileToBase64(file.mimetype, file.data); //use tempdir to avoid using node fs
    const { secure_url } = await cloudinary.uploader.upload( audioBase64, {
        folder: 'IndieSingles/Songs',
        resource_type: 'video'
    });

    return secure_url;

}

module.exports = {
    cloudinaryAudioUpload
};