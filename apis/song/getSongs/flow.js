const Song = require('../../../schemas/Song');

const { errorResponse } = require("../../../utils/responses");

const getSongsFlow = async(req, res) => {

    const { authorId, from = 0, limit = 5 } = req.query;
    let query = {};

    if(authorId){
        query = {
            songUser: authorId
        };
    }

    try{

        const songs = await Song.find(query)
                                    .skip(Number(from))
                                    .limit(Number(limit))
                                    .populate('songUser', 'name')
                                    .exec();

        return res.send(songs);

    }
    catch(error){
        console.log(error);
        return errorResponse(res, "Get songs failed: contact database administrator", error, 500);
    }

}

module.exports = getSongsFlow;