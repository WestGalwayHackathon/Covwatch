const countryService = require('../country/countryService')
const countryStatsService = require('../../ingestion/countryStatsService')
const updateCountryStats = async () => {
    console.log('----- Started Updating Country Stats -----');    
    var countries = await countryService.getAllCountries();
    for (let index = 0; index < countries.length; index++) {
        const country = countries[index];
        var latestStats = await countryStatsService.getCountryStats(country.name);
        var updatedStats = latestStats[0];            
        await countryService.updateCountryStats(country._id, updatedStats.deaths, updatedStats.confirmed, updatedStats.recovered) 
    }  
    console.log('----- Finished Updating Country Stats -----');  
}

module.exports = { updateCountryStats }