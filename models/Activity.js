const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type: String, require: true},
    photo:{type: String, require: true},
    itinerary:{type: String}
})

const Activity = mongoose.model(
    'cities',
    schema
)

module.exports = Activity