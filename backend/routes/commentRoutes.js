const express = require('express')
const router = express.Router()
const { getComments, setComment, updateComment, deleteComment } = require('../controllers/commentController')
const { updateMany } = require('../models/commentModel')

router.route('/').get(getComments).post(setComment)
router.route('/:id').delete(deleteComment).put(updateComment)

module.exports = router