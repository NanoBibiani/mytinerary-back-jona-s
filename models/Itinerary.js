const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type: String, require: true},
    user:{type: String},
    city:{type: String},
    price:{type: Number, require: true},
    likes:{type: Array, require: true},
    tags:{type: Array, require: true},
    duration:{type: Number, require:true}
})

const Itinerary = mongoose.model(

    'itineraries',
    schema
)

module.exports = Itinerary