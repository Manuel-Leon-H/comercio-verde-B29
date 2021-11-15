const mongoose = require('mongoose');

const comentarioSchema = Schema({
    usuario: {
        type: String,
        required: [true, '**** Db: La categoria es requerida']
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto'
    },
    calificacion: {
        type: Number,
        required: [true, '**** Db: El precio es requerido']
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    contenido:{
        type: String
    }
});

module.exports = model('Comentario',comentarioSchema)