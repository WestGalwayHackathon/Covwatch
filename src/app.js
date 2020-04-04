if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const appRouter = require('./routers/appRouter')
const createDBConnection = require('./db/db')


console.log('Connecting to DB...');
createDBConnection().then(() => {
  console.log('Booting up API...');
  const app = express();
  app.use(bodyParser.json())
  const port = process.env.PORT;
  console.log('Setting CORs Policy...');
  app.use(cors())
  console.log('Configuring Routes')
  app.use(appRouter);
  

  app.listen(port, () => console.log(`API running on http://localhost:${port}`));

})
