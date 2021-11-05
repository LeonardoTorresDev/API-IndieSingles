const cloudinary = require('cloudinary').v2;

const { fileToBase64 } = require('../utils/utils');

cloudinary.config( process.env.CLOUDINARY_URL );

const cloudinaryImageUpload = async file  => {

    const imageBase64 = fileToBase64(file.mimetype, file.data); //use tempdir to avoid using node fs
    const { secure_url } = await cloudinary.uploader.upload( imageBase64, {folder:`IndieSingles/Images`});
    return secure_url;

}

module.exports = {
    cloudinaryImageUpload
};
