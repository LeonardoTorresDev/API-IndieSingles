const User = require('../../../schemas/User');
const Song = require('../../../schemas/Song');

const { errorResponse } = require('../../../utils/responses');

const searchByNameFlow = async(req, res) => {

    const { name } = req.query;

    const regex = new RegExp(name, 'i');

    try{

        const usersFound = await User.find({ name: regex }).exec();
        
        const songsFound = await Song.find(
            { name: regex 
        }).populate('songUser', 'name').exec();

        const results = {
            users: usersFound,
            songs: songsFound
        }

        return res.status(200).json({
            results
        });

    }
    catch(error){
        console.log(error);
        return errorResponse(res, "Search failed: contact administrator", error, 500);
    }

}

module.exports = searchByNameFlow;
