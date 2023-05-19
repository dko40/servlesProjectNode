const mongoose =  require('mongoose')
const userModel = require('./user.model').schema
 
const profSchema = new mongoose.Schema({
    training: {type: String, required: true},   
    schooling: {type: String, required:true},
    specialty: {type: String, required:true},
    userModel: {type: userModel}
})

module.exports = mongoose.model('Professional', profSchema)