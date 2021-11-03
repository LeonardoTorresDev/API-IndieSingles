const User = require('../../../schemas/User');

const { cloudinaryImageDelete } = require('../../../services/cloudinaryImageDelete');
const { cloudinaryImageUpload } = require('../../../services/cloudinaryImageUpload');

const { customErrorResponse, errorResponse, customResponse } = require('../../../utils/responses');
const { imageExtensionValidator, encryptPassword } = require('../../../utils/utils');

const updateUserFlow = async (req, res) => {

    const {
        password,
        name
    } = req.body;

    const fileImage = '';

    if(req.files){
        if(!imageExtensionValidator(req.files.file.name)) {
            return customErrorResponse(res, "Invalid image extension", 401);
        }
        fileImage = req.files.file;
    }

    try {

        const user = await User.findById(req.user._id).exec();

        if(password){ 
            user.password = encryptPassword(password);
        }
        
        if(name){
            user.name = name;
        }

        if(fileImage.length > 0){
            if(user.profileImage){
                cloudinaryImageDelete(user.profileImage);
            }
            user.profileImage = await cloudinaryImageUpload(fileImage);   
        }

        await user.save();
        customResponse(res, "User updated successfully");

    }
    catch(error){
        console.log(error);
        errorResponse(res, "Contact database administrator", error, 500);
    }
}

module.exports = updateUserFlow;
