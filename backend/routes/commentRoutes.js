const express = require('express')
const router = express.Router()
const { getComments, setComment, updateComment, deleteComment } = require('../controllers/commentController')
const { updateMany } = require('../models/commentModel')

// const { protect } = require('../middleware/authMiddleware')

router.route('/').post(setComment)
router.route('/:id').get(getComments).put(updateComment).delete(deleteComment)
router.route('/:id/edit').put(updateComment)
router.route('/:id/delete').delete(deleteComment)
//add protect to all crud for auth

module.exports = router