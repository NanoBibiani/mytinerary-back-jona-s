const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type: String, require: true},
    lastName:{type: String, require: true},
    mail:{type: String, require: true},
    password:{type: String, require: true},
    photo:{type: String, require: true},
    country:{type: String, require: true},
})

const User = mongoose.model(

    'users',
    schema
)
module.exports = User
