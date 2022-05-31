const mongoose = require('mongoose');

const pizzasSchema = mongoose.Schema({
    name: {
        type: 'string',
        require: true
    },
    size: {
        type: 'string',
        require: true
    },
    adition: {
        type: 'string',
        require: true
    },
    price: {
        type: Number,
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', pizzasSchema)
