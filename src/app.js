const express = require("express");
const cors = require('cors');
const app = express();
const search = require('./app/country/searchCountry')

const port = 8080;
//call to api
let country = {
  name: 'Ireland',
  status: {
    title: 'Lockdown',
    startDate: Date.now()
  },
  statistics: {
    confirmed: 1500,
    deaths: 8,
    recovered: 200
  }
}

app.use(cors())

app.get("/api/search", (req, res) => {
  var result = search.execute('Ireland')
  res.send(result)
});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
