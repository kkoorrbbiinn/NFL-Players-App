const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/api/comments', function (req, res) {
    res.json({ message: 'Get Commnts'})
})

router.post('/comments', (req, res) => {
    db.Comment.create(req.body)
        .then(comment => res.json(comment))
})

router.get('', function (req, res) {
    db.Comment.findById(req.params.id)
        .then(comment => res.json(comment))
})

router.put('', (req, res) => {
    db.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(comment => res.json(comment))
})

router.delete('', (req, res) => {
    db.Comment.findByIdAndRemove(req.params.id)
        .then(() => res.send('You deleted comment ' + req.params.id))
})

module.exports = router