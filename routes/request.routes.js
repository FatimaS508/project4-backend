const router= require('express').Router()

const verifyToken= require('../middleware/verifyToken')

const requestController= require('../controllers/Request.controller')

router.post('/', verifyToken, requestController.createRequest)
router.put('/:id', verifyToken, requestController.updateRequest)
router.delete('/:id', verifyToken, requestController.deleteRequest)
router.get('/', verifyToken, requestController.getAllRequests)
router.get('/:id', verifyToken, requestController.getRequestById)





module.exports= router