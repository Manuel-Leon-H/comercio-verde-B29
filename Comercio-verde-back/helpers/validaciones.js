const Categoria = require('../models/categoria');
const Artesania = require('../models/artesania');

const categoriaExist = async (categoria = '') =>{
    let cate = await Categoria.findOne( { categoria } );
    if(!cate){
        throw new Error(`la categoria ${ categoria } no existe`);
    }
}

const productoByIdExists = async (id = '') => {
    let producto = await Artesania.findById(id);
    if(!producto){
        throw new Error(`El id ${ id } no es una artesania`);
    }
}

module.exports={
    categoriaExist,
    productoByIdExists
}