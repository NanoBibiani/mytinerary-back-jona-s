const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type: String, require: true},
    photo:{type: String, require: true},
    itinerary:{type:mongoose.Types.ObjectId,ref:'itineraries'}
})

const Activity = mongoose.model(

    'activities',
    schema
)

module.exports = Activity