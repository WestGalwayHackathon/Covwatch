var express = require('express')
var router = express.Router()
const countryRouter = require('./countriesRouter')


router.use('/api/countries', countryRouter)

module.exports = router;
