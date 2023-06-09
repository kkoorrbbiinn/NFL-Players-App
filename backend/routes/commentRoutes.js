const express = require('express')
const router = express.Router()
const { getComments, setComment, updateComment, deleteComment } = require('../controllers/commentController')
const { updateMany } = require('../models/commentModel')

router.route('/').post(setComment).put(updateComment)
router.route('/:playerId').get(getComments)
router.route('/:commentId').delete(deleteComment)

module.exports = router