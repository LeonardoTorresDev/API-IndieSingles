const mongoose = require('mongoose');

const User = require('../../../schemas/User');
const Song = require('../../../schemas/Song');
const CommentarySong = require('../../../schemas/CommentarySong');

const { customResponse, errorResponse } = require('../../../utils/responses');

const postCommentaryFlow = async( req, res ) => {

    const {
        commentary,
        songId
    } = req.body;

    const userId = req.user._id;

    const newCommentary = new CommentarySong({
        commentaryUser: userId,
        commentary,
        commentarySong: songId,
        createdAt: Date.now(),
        updatedAt: Date.now()
    });

    try{

        await newCommentary.save();

        await User.findByIdAndUpdate(
            userId,
            {
                $addToSet: {
                    userCommentarySongs: newCommentary._id
                },
                updatedAt: Date.now()
            }
        ).exec();

        await Song.findByIdAndUpdate(
            songId,
            {
                $addToSet: {
                    songCommentaries: newCommentary._id
                },
                updatedAt: Date.now()
            }            
        ).exec();

        return customResponse(res, "Commentary created successfully", 201);

    }
    catch(error){
        console.log(error);
        return errorResponse(res, 'Creating commentary failed: contact administrator', error, 500);
    }

}

module.exports = postCommentaryFlow;
