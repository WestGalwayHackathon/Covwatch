const mongoose = require('mongoose');
function createConnection() {  
    var connectionString = process.env.DB_CONNECTIONSTRING;
    return mongoose.connect(connectionString, {useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('Connection to Database has been established....'))
    .catch(err => console.error(err));  
} 

module.exports = createConnection;