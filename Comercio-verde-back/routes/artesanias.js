const { Router } = require('express');
const { check } = require('express-validator');

const { ArtesaniaByIdExists
 } = require('../helpers/validaciones')
 const { validateDate } =require('../middlewares/validacionerrores')

const router = Router();

const { artesaniaGet,
        artesaniaPost,
        artesaniaPut,
        artesaniaDelete,
        artesaniaGetByid
 } = require('../controllers/artesanias')

router.get('/', artesaniaGet);

router.get('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(ArtesaniaByIdExists),
    validateDate
],artesaniaGetByid)

router.post('/',[
    check('categoria', 'Categoria equivocada (Artesania)').isIn(['Artesania']),
    check('stock', 'El stock es requerido o es invalido').notEmpty().isInt({ min:1 }),
    check('nombre', 'El nombre es requerido').notEmpty(),
    check('precio', 'El precio es requerido').notEmpty(),
    validateDate
], artesaniaPost);

router.put('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(ArtesaniaByIdExists),
    validateDate
], artesaniaPut);

router.delete('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(ArtesaniaByIdExists),
    validateDate
], artesaniaDelete);

module.exports = router;