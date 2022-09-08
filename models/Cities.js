const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    city:{type:String,required:true},
    country:{type:String,required:true},
    photo:{type:String,required:true},
    population:{type:Number},
    fundation:{type:Number,required:true},

})

const City = mongoose.model(
    'cities',
    schema
)
module.exports = City