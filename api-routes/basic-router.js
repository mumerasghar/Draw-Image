const express = require('express')
const router = express.Router()

router.use(function (req, res, next) {
    console.log("Time : ", Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send("Birds home page")
})

router.get('/about', (req, res) => {
    res.send("Birds dont have home")
})

module.exports = router
