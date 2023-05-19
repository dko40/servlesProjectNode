const mongoose =  require('mongoose')
const adressModel = require('./adress.model').schema
 
const userSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    birthdate: { type: Date, required: true},
    username: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    adressModel: {type: adressModel}
})

module.exports = mongoose.model('User', userSchema)