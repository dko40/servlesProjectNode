const mongoose =  require('mongoose')
const adressSchema = new mongoose.Schema({
    street: {type: String, required: true},
    number: {type: String, required: true},   
    neighboord: {type: String, required: true},
    postalcode: { type: String, required: true},
    city: {type: String, required:true},
    state: {type: String, required:true},
    country: {type: String, required:true}
})

module.exports = mongoose.model('adress', adressSchema)