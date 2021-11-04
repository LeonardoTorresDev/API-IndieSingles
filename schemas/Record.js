const { Schema, model } = require('mongoose');

const RecordSchema = Schema({

    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    type: {
        type: String,
        required: [ true, 'Type is required'],
        enum: [ 'single', 'ep', 'album' ]
    },
    duration: {
        type: Number,
        default: 0
    },
    countSongs: {
        type: Number,
        default: 0
    },
    recordImage: {
        type: String,
        required: [ true, 'recordImage is required']
    },
    releaseDate: {
        type: Date,
        required: [ true, 'ReleaseDate is required']
    },
    recordSongs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Song'
        }
    ],
    recordUser: {
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

RecordSchema.methods.toJSON = function () {
    const { __v, ...record } = this.toObject();
    return record;
}

module.exports = model('Record', RecordSchema);

