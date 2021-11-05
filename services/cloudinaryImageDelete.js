const cloudinary = require('cloudinary').v2;

cloudinary.config( process.env.CLOUDINARY_URL );

const cloudinaryImageDelete = photoUrl => {

    const splittedUrl = photoUrl.split('/');
    const [ name ] = splittedUrl[splittedUrl.length-1].split('.');//get public_id and  cut the extension
    cloudinary.uploader.destroy( `IndieSingles/Images/${name}` );

}

module.exports = {
    cloudinaryImageDelete
};
