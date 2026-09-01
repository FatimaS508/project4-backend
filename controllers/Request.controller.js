const Request = require('../models/requestSupport')
const Category= require('../models/category')

async function createRequest(req,res) {
    try{
        const {
            categoryId,
            subcategoryId,
            priority,
            requestDetails,
            attachments
        } = req.body;
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({
                message: "The category not found"
            });
        }

        const subcategory = category.subcategories.id(subcategoryId);

        if (!subcategory) {
            return res.status(404).json({
                message: "The subcategory not found"
            });
        }
      const latestRequest = await Request.findOne().sort({ requestNumber: -1 })
      const nextRequestNumber = latestRequest?.requestNumber? latestRequest.requestNumber + 1: 1001
        const request = await Request.create({
            requestNumber: nextRequestNumber,
            title: subcategory.name,

            category: categoryId,
            subcategoryId,
            priority,
            requestDetails,
            attachments: attachments || [],


            createdBy: req.user._id
        })
        res.status(201).json(request);
    }catch(err){console.log(err)
        res.status(500).json({
            message: "Failed"
        })
    }
    
}

async function updateRequest(req, res) {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    const {
      priority,
      requestDetails,
      attachments
    } = req.body;

    if (priority !== undefined) {
      request.priority = priority;
    }

    if (requestDetails !== undefined) {
      request.requestDetails = requestDetails;
    }

    if (attachments !== undefined) {
      request.attachments = attachments;
    }

    await request.save();

    return res.status(200).json(request);

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Failed"
    });
  }
}


async function deleteRequest(req, res) {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    await Request.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Request deleted successfully"
    });

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Cannot delete request"
    });
  }
}

async function getAllRequests(req, res) {
  try {
    const requests = await Request.find()
      .populate("createdBy", "username role employeeId department")
      .populate("assignedTo", "username role")
      .populate("category", "name subcategories")
      .populate("replies.sender", "username role employeeId department")
      

    return res.status(200).json(requests);

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Failed"
    });
  }
}
async function getMyRequests(req, res) {
  try {
    const requests = await Request.find({createdBy: req.user._id})
      .populate("createdBy","username role employeeId department")
      .populate("category", "name subcategories")
      .sort({ createdAt: -1 })

    return res.status(200).json(requests)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Failed to load your requests"
    })
  }
}

async function getRequestById(req, res) {
  try {
    const request = await Request.findById(req.params.id)
      .populate("createdBy", "username role employeeId department")
      .populate("assignedTo", "username role")
      .populate("category", "name subcategories")
      .populate("replies.sender", "username role employeeId department");

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    return res.status(200).json(request);

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Failed"
    });
  }
}


async function replyToRequest(req,res){
  try{
    const { requestId } = req.params;
    const { message, attachments = [] } = req.body;

    const request = await Request.findById(requestId);
    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }
    if (!message?.trim()) {
      return res.status(400).json({
        message: "Please enter a message "
      });
    }

    request.replies.push({
      message: message?.trim(),
      sender: req.user._id,
      attachments
    });

    if (!request.assignedTo && req.user.role === "Technician") {
      request.assignedTo = req.user._id
    }

    request.status = "Waiting for confirmation"

    await request.save();
    await request.populate([
      {
        path: "replies.sender",
        select: "username role employeeId department"
      },
      {
        path: "assignedTo",
        select: "username role employeeId department"
      }
    ]);
    
    return res.status(201).json({
      message: "Reply added successfully",
      request
    });
  

  }catch(err){console.log(err)}
}

async function updateRequest(req, res) {
  try {
    const { status } = req.body
    const request = await Request.findById(req.params.id)

    if (!request) {
      return res.status(404).json({message: "Request not found"})}

    if (status) {request.status = status}

    await request.save()

    res.status(200).json(request)
  } catch (err) {
    res.status(500).json({message: err.message
    })
  }
}

async function deleteReply(req, res) {
  try {
    const request = await Request.findById(req.params.requestId)

    const reply = request.replies.id(req.params.replyId)
    

    if (!reply) {
      return res.status(404).json({
        message: "Reply not found"
      })
    }
    reply.deleteOne()
    await request.save()

    return res.status(200).json({
      message: "Reply deleted successfully"
    })
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      message: err.message
    })
  }
}



module.exports= {createRequest, updateRequest, deleteRequest, getAllRequests, getRequestById, replyToRequest, updateRequest, deleteReply, getMyRequests}



