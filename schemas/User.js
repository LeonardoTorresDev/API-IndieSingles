const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    userSubscribers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    userSubscriptions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    profileImage: {
        type: String
    },
    topicArn: {
        type: String,
        required: true
    },
    userSongs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Song'
        }
    ],
    userPosts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    userCommentarySongs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CommentarySong'  
        }
    ],
    description: {
        type: String
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


UserSchema.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject();
    return user;
}

module.exports = model('User', UserSchema);
