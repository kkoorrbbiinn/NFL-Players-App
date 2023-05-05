const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
        text: { type: String, required: true },
        playerId: { type: String, required: true },
    },
    { timestamps: true }
)

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;