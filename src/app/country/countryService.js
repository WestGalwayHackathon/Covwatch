const country = require('../../models/country')

const searchCountries = async (name) => {
  return await country.findOne({ name: name });
}

const updateCountryStats = async (id, deaths, confirmed, recovered) => {

  return await country.findOneAndUpdate({ _id: id }, 
    { $set: 
      { 
        'statistics.deaths': deaths,
        'statistics.recovered': recovered,
        'statistics.confirmed': confirmed,
        'statistics.updatedAt': Date.now() 
      } 
    }, 
    function (err, doc) {
      if (err) {
        console.log('err-', err);
      }
      console.log(doc.name , ' has been updated');    
    }
  );
}

const getAllCountries = async () => {
  return await country.find();
}


module.exports = { searchCountries, updateCountryStats, getAllCountries }