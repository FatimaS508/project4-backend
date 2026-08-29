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
        const request = await Request.create({
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
      .populate("createdBy", "username role")
      .populate("assignedTo", "username role")
      .populate("category", "name")
      .populate("replies.sender", "username role")
      

    return res.status(200).json(requests);

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Failed"
    });
  }
}

async function getRequestById(req, res) {
  try {
    const request = await Request.findById(req.params.id)
      .populate("createdBy", "username role")
      .populate("assignedTo", "username role")
      .populate("category", "name")
      .populate("replies.sender", "username role");

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

    if (!request.assignedTo) {
      request.assignedTo = req.user._id;
    }

    if (request.Status === "New") {
      request.Status = "In progress";
    }

    await request.save();
    await request.populate([
      {
        path: "replies.sender",
        select: "username role"
      },
      {
        path: "assignedTo",
        select: "username role"
      }
    ]);
    
    return res.status(201).json({
      message: "Reply added successfully",
      request
    });
  

  }catch(err){console.log(err)}
}



module.exports= {createRequest, updateRequest, deleteRequest, getAllRequests, getRequestById, replyToRequest}



