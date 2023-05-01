const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        name: { type: String },
        content: { type: String }
    },
    { timestamps: true }
)

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;