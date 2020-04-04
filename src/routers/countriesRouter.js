var express = require('express')
var router = express.Router()
const countryService = require('../app/country/countryService')


router.get("/search", async (req, res) => {
    var parameter = req.query.country;
    console.log(req.query)
    var result = await countryService.searchCountries(parameter)
    res.send(result)
});

router.put("/updatedeaths", async (req, res) => {
    var countryId = req.params.id;
    console.log(req.body);
    var deaths = req.body.deaths
    var updatedCountry = await countryService.updateDeaths(countryId, deaths);
    res.send(updatedCountry)
});
module.exports = router