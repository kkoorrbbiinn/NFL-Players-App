const Comment = require('../models/commentModel')
// const User = require('../models/userModel')

const getComments = async (req, res) => {
  try {
    console.log(req)
    const comments = await Comment.find({})
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// ad this to Comment.find for auth  user: req.user.id 

const setComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text,
      playerId: req.body.playerId
      // user: req.user.id
    })
    res.status(201).json(comment)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const updateComment = async (req, res) => {
    // const user = await User.findById(req.user.id)
    // if(!user) {
    //   res.status(401)
    //   throw new Error('User not found')
    // }

    // if(comment.user.toString() !== user.id) {
    //   res.status(401)
    //   throw new Error('User not authorized')
    // }
    const comment = new Comment({
      playerId: req.body.playerId,
      text: req.body.text,
    });
    await comment.save();
    res.json({ message: 'Comment created successfully.' });
}

const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: `Deleted Comment ${req.params.id}` })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = {
  getComments,
  setComment,
  updateComment,
  deleteComment
}
