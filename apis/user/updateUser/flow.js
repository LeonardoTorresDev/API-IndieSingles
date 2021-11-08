const User = require('../../../schemas/User');

const { cloudinaryDelete } = require('../../../services/cloudinaryDelete');
const { cloudinaryImageUpload } = require('../../../services/cloudinaryImageUpload');

const { customErrorResponse, errorResponse, customResponse } = require('../../../utils/responses');
const { imageExtensionValidator, encryptPassword } = require('../../../utils/utils');

const updateUserFlow = async (req, res) => {

    const { password, description } = req.body;
    let fileImage = '';

    if(req.files){
        if(!imageExtensionValidator(req.files.file.name)) {
            return customErrorResponse(res, "Invalid image extension", 401);
        }   
        fileImage = req.files.file;
    }

    try {

        let user = await User.findById(req.user._id).exec();
        user.description = description;

        if(password){ 
            user.password = encryptPassword(password);
        }
        
        if(fileImage){
            if(user.profileImage){
                cloudinaryDelete(user.profileImage, 'Images');
            }
            user.profileImage = await cloudinaryImageUpload(fileImage);
        }

        user.updatedAt = Date.now();
        await user.save();

        return customResponse(res, "User updated successfully");

    }
    catch(error){
        console.log(error);
        errorResponse(res, "Contact database administrator", error, 500);
    }
    
}

module.exports = updateUserFlow;
