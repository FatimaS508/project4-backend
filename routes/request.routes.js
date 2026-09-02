const router= require('express').Router()

const verifyToken= require('../middleware/verifyToken')

const requestController= require('../controllers/Request.controller')

router.post('/', verifyToken, requestController.createRequest)
router.put('/:id', verifyToken, requestController.updateRequest)
router.put( "/:id/status", verifyToken, requestController.updateRequestStatus)
router.delete('/:id', verifyToken, requestController.deleteRequest)
router.get('/', verifyToken, requestController.getAllRequests)
router.get('/my', verifyToken, requestController.getMyRequests)
router.get('/:id', verifyToken, requestController.getRequestById)
router.post("/", verifyToken, requestController.createRequest);

router.post('/:requestId/replies', verifyToken, requestController.replyToRequest)
router.get('/:requestId/replies', verifyToken, requestController.replyToRequest)
router.delete('/:requestId/replies/:replyId',verifyToken ,requestController.deleteReply)


module.exports= router