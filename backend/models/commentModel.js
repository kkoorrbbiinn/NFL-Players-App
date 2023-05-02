const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        // user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
        text: { type: String, required: true },
        playerId: { type: String, required: true }
    },
    { timestamps: true }
)

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;