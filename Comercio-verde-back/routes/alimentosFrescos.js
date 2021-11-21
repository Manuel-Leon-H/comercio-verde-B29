const { Router } = require('express');
const { check } = require('express-validator');

const { categoriaExist,
    AlimentoByIdExists
} = require('../helpers/validaciones');

const { validateDate } =require('../middlewares/validacionerrores');

const router = Router();

const { alimentoGet,
    alimentoGetById,
    alimentoPost,
    alimentoPut,
    alimentoDelete
} = require('../controllers/alimentosFrescos')

router.get('/',alimentoGet);

router.get('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id','hola').custom(AlimentoByIdExists),
    validateDate
],alimentoGetById);

router.post('/',[
    check('categoria').isIn(['Alimento']),
    check('stock', 'El stock es requerido o es invalido').notEmpty(),
    check('nombre', 'El nombre es requerido').notEmpty(),
    check('precio', 'El precio es requerido').notEmpty(),
    check('ciudadproduccion', 'La ciudad es requerida').notEmpty(),
    validateDate
],alimentoPost);

router.put('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(AlimentoByIdExists),
    validateDate
], alimentoPut);

router.delete('/:id',[
    check('id', 'No es un Id valido').isMongoId(),
    check('id').custom(AlimentoByIdExists),
    validateDate
], alimentoDelete);

module.exports = router;
