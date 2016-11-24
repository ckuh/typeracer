const router = require('express').Router()
const words = require('./words.js')

router.use('/words', words)

module.exports = router
