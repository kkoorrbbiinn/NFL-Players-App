const Comment = require('../models/commentModel')

const getComments = async (req, res) => {
    const comments = await Comment.find()
    res.status(200).json(comments)
}

const setComment = async (req, res) => {
    const comment = await Comment.create({
        text: req.body.params
    })
    res.status(200).json(comment)
}

const updateComments = async (req, res) => {
    const comment = await Comment.findById(req.params.id)
    res.status(200).json({ message: `Update Comment ${req.params.id}` })
}

const deleteComment = async (req, res) => {
    res.status(200).json({ message: `Delete Comment ${req.params.id}` })
}

module.exports = {
    getComments, setComment, updateComments, deleteComment
}