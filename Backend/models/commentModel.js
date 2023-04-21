const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        content: { type: String, required: true },
        courseId: { type: Number, require: true }
    },
    { timestamps: true }
)

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;