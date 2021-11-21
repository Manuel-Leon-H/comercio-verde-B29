const Alimento = require('../models/alimentosFrescos');

const alimentoGet = async (req, res) => {
    const alimento = await Alimento.find({categoria: 'Alimento'})
    res.json(alimento);
}

const alimentoGetById = async(req,res)=>{
    const { id } = req.params;
    const alimento = await Alimento.findById(id);

    res.json(alimento)
}

const alimentoPost = async(req,res)=>{
    const { categoria,nombre,precio,img,stock,descripcion,ciudadproduccion } = req.body;

    const nuevoAlimento = await Alimento({categoria,nombre,precio,img,stock,descripcion,ciudadproduccion});
    await nuevoAlimento.save()

    res.json({ nuevoAlimento })
}

const alimentoPut = async (req,res)=>{
    const { id } = req.params;
    const { _id,dcto,ciudadproduccion, ...data } = req.body;

    const AliActu = await Alimento.findByIdAndUpdate(id,data,{new:true});

    res.json({AliActu})
}

const alimentoDelete = async (req, res) => {
    const { id } = req.params;
    
    const productoEliminado = await Alimento.findByIdAndDelete(id)

    res.json({ "mensaje":"producto eliminado",productoEliminado });
}

module.exports = {
    alimentoGet,
    alimentoGetById,
    alimentoPost,
    alimentoPut,
    alimentoDelete
}