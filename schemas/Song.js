const { Schema, model } = require('mongoose');

const SongSchema = Schema({

    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    duration: {
        type: Number
    },
    songURL: {
        type: String,
        required: [ true, 'SongURL is required']
    },
    songRecord: {
        type: Schema.Types.ObjectId,
        ref: 'Record'
    },
    songUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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

