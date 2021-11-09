const { Schema, model } = require('mongoose');

const SongSchema = Schema({

    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    songUrl: {
        type: String,
        required: [ true, 'SongURL is required']
    },
    songImage: {
        type: String,
        required: [ true, 'Image is required']
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    songUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    songCommentaries: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CommentarySong'
        }
    ],
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }

});

SongSchema.methods.toJSON = function () {
    const { __v, ...song } = this.toObject();
    return song;
}

module.exports = model('Song', SongSchema);

