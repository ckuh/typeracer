const router = require('express').Router()
const word = require('../controllers/word.js')

router.post('', word.post)

module.exports = router
