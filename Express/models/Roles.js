const mongoose = require('mongoose')

const rolesSchema = mongoose.Schema({
    admin: {
        type: 'string',
        require: true
    },
    cliente: {
        type: 'string',
        require: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('roles', rolesSchema)
