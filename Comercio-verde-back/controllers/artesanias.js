const Artesania = require('../models/artesania')

const artesaniaGet = async (req, res) => {
    const artesanias = await Artesania.find({categoria: 'Artesania'})
    res.json(artesanias);
}

const artesaniaGetByid = async (req, res) => {
    const { id } = req.params;

    const artesaniaF = await Artesania.findById(id)

    res.json( artesaniaF );
}

const artesaniaPost = async (req, res) => {

    const { categoria, nombre, precio, img, stock ,descripcion} = req.body;
    const nuevaArtesania = new Artesania({categoria,nombre,precio,img,stock,descripcion});
    await nuevaArtesania.save()

    res.json({ nuevaArtesania });
}

const artesaniaPut = async (req, res) => {
    const { id } = req.params;
    const { _id, dcto ,...data} = req.body

    const ArteActu = await Artesania.findByIdAndUpdate(id,data,{new:true})
    res.json( {ArteActu} );
}

const artesaniaDelete = async (req, res) => {
    const { id } = req.params;
    
    const productoEliminado = await Artesania.findByIdAndDelete(id)

    res.json({ "mensaje":"producto eliminado",productoEliminado });
}



module.exports = {
    artesaniaGet,
    artesaniaPost,
    artesaniaPut,
    artesaniaDelete,
    artesaniaGetByid
}