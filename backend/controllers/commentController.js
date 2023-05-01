// const Comment = require('../models/commentModel')

// const getComments = async (req, res) => {
//     const comments = await Comment.find()
//     res.status(200).json(comments)
// }

// const setComment = async (req, res) => {
//     const comment = await Comment.create({
//         text: req.body.params
//     })
//     res.status(200).json(comment)
// }

// const updateComments = async (req, res) => {
//     const comment = await Comment.findById(req.params.id)
//     res.status(200).json({ message: `Update Comment ${req.params.id}` })
// }

// const deleteComment = async (req, res) => {
//     res.status(200).json({ message: `Delete Comment ${req.params.id}` })
// }

// module.exports = {
//     getComments, setComment, updateComments, deleteComment
// }

const Comment = require('../models/commentModel')

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const setComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text // change from req.body.params to req.body.text
    })
    res.status(201).json(comment) // change status code to 201
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(comment)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: `Delete Comment ${req.params.id}` })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getComments,
  setComment,
  updateComment, // change function name to updateComment
  deleteComment
}
