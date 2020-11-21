const { Schema, model } = require('mongoose');
const LocalesSchema = new Schema({
    Nombre: { type: String, require: true },
    Precio: { type: Number, require: true },
    CantidadMaxima: { type: Number, require: true },
    url_img: { type: String, require: true },
    Descripcion: { type: String, require: true },
    PromoDia: { type: String }
}, {
    collection: 'Locales'
})

module.exports = model('Local', LocalesSchema);