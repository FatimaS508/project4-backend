const router= require('express').Router()

const verifyToken= require('../middleware/verifyToken')
const categoriesController = require('../controllers/Categories.controller')


router.get('/', verifyToken, categoriesController.getAllCategories )
router.get('/:id', verifyToken, categoriesController.getCategoryById )
router.get('/subcategory/:scategoryId',verifyToken, categoriesController.getSubcategoryById)


module.exports= router