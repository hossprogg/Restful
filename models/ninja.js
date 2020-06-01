const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

const NinjaSchema = new Schema({
    name  : {
        type : 'string' ,
        required : [true,'Name field is required']
    },
    rank : {
        type : 'string'//we put them within quotes 
    },
    available : {
        type  : Boolean,
        default : false
    },
    geometry: GeoSchema

})
const Ninja = mongoose.model('ninja', NinjaSchema)
//mongoose.model (the name of the model in the database, the variable assigned  the new schema )
module.exports = Ninja