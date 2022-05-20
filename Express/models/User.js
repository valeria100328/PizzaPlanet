const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email : {
        type: 'string',
        require: true
    },
    password: {
        type: 'string',
        require: true
    },
    rol: {
        type: mongoose.Schema
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', userSchema)
