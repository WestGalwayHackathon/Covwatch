const { attributes } = require('source')

const Country = attributes({
    name: {
        type: String,
        required: true
    },
    statistics: Statistic,
    status: Status
})

const Status = attributes({
    title: String,
    startDate: Date
})

const Statistic = attributes({
    deaths: Number,
    confirmed: Number,
    recovered: Number
})

module.exports = Country