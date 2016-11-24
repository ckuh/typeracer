const router = require('express').Router()
const words = require('../controllers/words.js')

router.get('', words.get)

module.exports = router
