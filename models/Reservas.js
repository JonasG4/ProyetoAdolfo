const { Schema, model } = require('mongoose');
const ReservaSchema = new Schema({
    Evento: { type: String, require: true },
    Fecha: { type: Date, default: Date.now },
    CantidadPersonas: { type: Number, require: true },
    Usuario: { type: String, require: true },
    Estado: { type: String, require: true, default: "En espera" }
})

module.exports = model('Reserva', ReservaSchema);