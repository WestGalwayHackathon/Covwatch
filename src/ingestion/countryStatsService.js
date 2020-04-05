const axios = require('axios')

const getCountryStats = async (name) => {
    var client = axios.create({ baseURL: process.env.COVIDAPIURL, headers: {'x-rapidapi-host' : 'covid-19-data.p.rapidapi.com', 'x-rapidapi-key' : 'c6aebac1d6msh66a66ffd23f977dp19fbcfjsnda1db357d05e'}})
    var url = `country?format=undefined&name=${name}`
    var result = await client.get(url);
    
    return result.data;
}

module.exports = { getCountryStats }