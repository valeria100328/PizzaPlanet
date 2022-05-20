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
    },
    price: {
        type: Number,
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('pizzas', pizzasSchema)
