const Request = require('../models/requestSupport')

async function createRequest(req,res) {
    try{
        const request= await Request.create()
    }catch(err){console.log(err)}
    
}


async function getAllRequests(req, res) {
    try {
        const allRequests = await Request.find()
        res.status(200).json(allRequests)
    } catch (err) { console.log(err) }
}



