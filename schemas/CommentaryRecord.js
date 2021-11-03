const { Schema, model } = require('mongoose');

const CommentaryRecordSchema = Schema({

    commentary: {
        type: String,
        required: [ true, 'Commentary is required' ]
    },
    commentaryUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    commentaryRecord: {
        type: Schema.Types.ObjectId,
        ref: 'Record'
    },
    createdAt: {
        type: Date,
        required: true
    }

});

CommentaryRecordSchema.methods.toJSON = function () {
    const { __v, ...commentaryRecord } = this.toObject();
    return commentaryRecord;
}

module.exports = model('CommentaryRecord', CommentaryRecordSchema);
