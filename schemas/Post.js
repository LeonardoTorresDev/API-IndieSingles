const { Schema, model } = require('mongoose');

const PostSchema = Schema({

    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    description: {
        type: String,
        required: [ true, 'Description is required']
    },
    photoURL: {
        type: String,
        required: [ true, 'Photo URL is required']
    },
    postUser: {
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

PostSchema.methods.toJSON = function () {
    const { __v, ...post } = this.toObject();
    return post;
}

module.exports = model('Post', PostSchema);
