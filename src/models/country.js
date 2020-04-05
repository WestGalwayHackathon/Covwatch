const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    title: { type: String, required: true },
    startDate: { type: Date, required: true }
})

const statisticSchema = new mongoose.Schema({
    confirmed:{type:Number, required:true},
    deaths:{type:Number,required:true},
    recovered:{type:Number,required:true},
    updatedAt: {type:Date, required: true}

})



const countrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: statusSchema,
    statistics: statisticSchema,

})
const country = mongoose.model('country', countrySchema, 'countries');

module.exports = country;




// const { attributes } = require('structure')

// const Country = attributes({
//     name: {
//         type: String,
//         required: true
//     },
//     statistics: {
//         deaths: Number,
//         confirmed: Number,
//         recovered: Number
//     },
//     status: {
//         title: String,
//         startDate: Date
//     }
// })


// module.exports = Country