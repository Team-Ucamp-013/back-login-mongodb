const express = require('express')
const router = express.Router()

const userRouter = require('./users')
const authRouter = require('./auth')
// const authMiddleware = require('../middleware/authorization')

const categoryRouter = require('./category')
router.use('/auth', authRouter)

// router.use(authMiddleware)
router.use('/users', userRouter)
router.use('/category', categoryRouter)


module.exports = router