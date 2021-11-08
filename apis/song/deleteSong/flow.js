const mongoose = require('mongoose');

const Song = require('../../../schemas/Song');
const User = require('../../../schemas/User');

const { customResponse, errorResponse } = require('../../../utils/responses');
const { cloudinaryDelete } = require('../../../services/cloudinaryDelete');

const deleteSongFlow = async(req, res) => {

    const { songId } = req.query;
    const { _id } = req.user;
 
    const session = await mongoose.startSession();
    session.startTransaction();

    try{

        const song = await Song.findByIdAndRemove(songId).exec();

        cloudinaryDelete(song.songUrl, 'Songs');
        cloudinaryDelete(song.songImage, 'Images');

        await User.findByIdAndUpdate(
            _id,
            {
                $pull: {
                    userSongs: song._id
                },
                updatedAt: Date.now()
            }
        ).exec();
        
        return customResponse(res, 'Song deleted successfully');

    }
    catch(error){
        console.log(error);
        return errorResponse(res, "Song delete failed: contact administrator", error, 500);
    }



}

module.exports = deleteSongFlow;
