const { Schema, model } = require('mongoose')

const usersSchema = new Schema({
    Nombre: {
        type: String,
        require: true,
        min: 3,
        max: 255
    },
    Usuario: {
        type: String,
        require: true,
        min: 3,
        max: 255
    },
    Password: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    Role: {
        type: String,
        default: 'normal',
        enum: [
            'normal',
            'admin'
        ]
    },
})

module.exports = model('Users', usersSchema)