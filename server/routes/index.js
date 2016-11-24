const router = require('express').Router()
const words = require('./words.js')
const word = require('./word.js')

router.use('/words', words)
router.use('/word', word)

module.exports = router
