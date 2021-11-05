const { Schema, model } = require('mongoose');

const CommentarySongSchema = Schema({

    commentary: {
        type: String,
        required: [ true, 'Commentary is required' ]
    },
    commentaryUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    commentarySong: {
        type: Schema.Types.ObjectId,
        ref: 'Song'
    },
    createdAt: {
        type: Date,
        required: true
    }

});

CommentarySongSchema.methods.toJSON = function () {
    const { __v, ...commentarySong } = this.toObject();
    return commentarySong;
}

module.exports = model('CommentarySong', CommentarySongSchema);
