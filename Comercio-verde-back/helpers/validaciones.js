const Categoria = require('../models/categoria');
const Artesania = require('../models/artesania');
const Alimento = require('../models/alimentosFrescos')

const categoriaExist = async (categoria = '') =>{
    let cate = await Categoria.findOne( { categoria } );
    if(!cate){
        throw new Error(`la categoria ${ categoria } no existe`);
    }
}

const ArtesaniaByIdExists = async (id = '') => {
    let producto = await Artesania.findById(id);
    if(!producto){
        throw new Error(`El id ${ id } no es una artesania`);
    }
}

const AlimentoByIdExists = async (id = '') => {
    let producto = await Alimento.findById(id);
    if(!producto){
        throw new Error(`El id ${ id } no es un Alimento`);
    }
}

module.exports={
    categoriaExist,
    ArtesaniaByIdExists,
    AlimentoByIdExists
}