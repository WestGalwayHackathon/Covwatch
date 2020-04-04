const country = require('../../models/country')

const searchCountries = async (name) => {
 return await  country.findOne({name:name});
}

const updateDeaths = async (id,deaths) => {
  return await country.findOneAndUpdate(id, {$set: {'statistics.deaths': deaths}});  
}


module.exports = { searchCountries, updateDeaths }