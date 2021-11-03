const { Schema, model } = require('mongoose');

const CommentaryPostSchema = Schema({

    commentary: {
        type: String,
        required: [ true, 'Commentary is required' ]
    },
    commentaryUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    commentaryPost: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    createdAt: {
        type: Date,
        required: true
    }

});

CommentaryPostSchema.methods.toJSON = function () {
    const { __v, ...commentaryPost } = this.toObject();
    return commentaryPost;
}

module.exports = model('CommentaryPost', CommentaryPostSchema);
