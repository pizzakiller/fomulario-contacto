const router = require('express').Router()
const apiContactoRouter = require('./api/contacto')
router.use('/contacto', apiContactoRouter)

module.exports = router