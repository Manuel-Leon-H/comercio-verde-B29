const mongoose = require('mongoose');

const AlimentosSchema = mongoose.Schema({
    categoria: {
        type:String,
        required:[true, '**** Db: La categoria es requerida']
    },
    nombre: {
        type:String,
        required:[true, '**** Db: El nombre es requerida']
    },
    precio: {
        type: Number,
        required: [true, '**** Db: El precio es requerido']
    },
    img: {
        type: String,
        default: ''
    },
    stock: {
        type: String,
        required: true
    },
    dcto: {
        type: Number,
        default: 0
    },
    descripcion:{
        type: String
    },
    ciudadproduccion:{
        type:String,
        required: [true, '**** Db: La ciudad de producción es requerida']
    }
})


module.exports = mongoose.model('Alimento',AlimentosSchema)