const express = require('express')
const router = express.Router()
const { getComments, setComment, updateComments, deleteComment } = require('../controllers/commentController')
const { updateMany } = require('../models/commentModel')

router.route('/').get(getComments).post(setComment)
router.route('/:id').delete(deleteComment).put(updateComments)

module.exports = router