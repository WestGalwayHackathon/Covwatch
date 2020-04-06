const Agenda = require('agenda')
const scheduleJobService = require('../app/jobs/scheduleJobService')
const connectionString = process.env.DB_CONNECTIONSTRING

const configure = async () => {
    const agenda = new Agenda({ db: { address: connectionString, collection: 'jobs' } })

    agenda.define('update country stats', async job => {
        console.log('----- Started Updating Country Stats -----');
        await scheduleJobService.updateCountryStats();
        console.log('----- Finished Updating Country Stats -----'); 
    })

    await agenda.start();
    await agenda.every('1 hour', 'update country stats')
}

module.exports = { configure }