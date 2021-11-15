const { Router } = require('express');
const { check } = require('express-validator');

const { categoriaExist,
        productoByIdExists
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
    check('id','hola').custom(productoByIdExists),
    validateDate
],artesaniaGetByid)

router.post('/',[
    check('categoria').custom(categoriaExist),
    check('stock', 'El stock es requerido o es invalido').notEmpty().isInt({ min:1 }),
    check('nombre', 'El nombre es requerido').notEmpty(),
    check('precio', 'El precio es requerido').notEmpty(),
    validateDate
], artesaniaPost);

router.put('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(productoByIdExists),
    validateDate
], artesaniaPut);

router.delete('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(productoByIdExists),
    validateDate
], artesaniaDelete);

module.exports = router;