const mongoose =  require('mongoose')
const userModel = require('./user.model').schema
 
const fincSchema = new mongoose.Schema({
    countType: {type: String, required: true},
    dateCreation: { type: Date, required: true},
    numberCount: {type: String, required:true},
    userModel: {type: userModel}
})

module.exports = mongoose.model('Finc', fincSchema)