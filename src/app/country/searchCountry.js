const Country = require('../../models/country')

class SearchCountries {
    execute(name){
        var country = new Country({
            name, statistics: { deaths: 1000, confirmed: 10000, recovered: 250}
        })

        return country;
    }
}


module.exports = SearchCountries