const express = require('express')
const router = express.Router( { mergeParams: true } )

// /api/auth
router.use('/auth', require('./auth.routes'))
router.use('/articles', require('./articles.routes'))
router.use('/comments', require('./comments.routes'))

module.exports = router