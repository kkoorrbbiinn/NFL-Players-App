const express = require('express')
const router = express.Router()
const { getComments, setComment, updateComment, deleteComment } = require('../controllers/commentController')
const { updateMany } = require('../models/commentModel')

// const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getComments).post(setComment)
router.route('/:id').delete(deleteComment).put(updateComment)

//add protect to all crud for auth

module.exports = router