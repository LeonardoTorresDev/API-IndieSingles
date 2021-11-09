const Song = require('../../../schemas/Song');

const { errorResponse } = require('../../../utils/responses');

const getSongFlow = async (req, res) => {

    const { songId } = req.query;

    try {

        const song = await Song.findById(songId)
                                .populate({
                                    path: 'songCommentaries',
                                    populate: {
                                        path: 'commentaryUser',
                                        model: 'User',
                                        select: 'name'
                                    }
                                })
                                .populate('songUser', 'name')
                                .exec();
                                
        return res.send(song);

    } catch (error) {
        console.log(error);
        return errorResponse(res, "Error: contact administrator", error, 500);
    }

}

module.exports = getSongFlow;
