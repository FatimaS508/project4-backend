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
      .populate("createdBy", "username")
      .populate("assignedTo", "username")
      .populate("category", "name")
      

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
      .populate("createdBy", "username")
      .populate("assignedTo", "username")
      .populate("category", "name");

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



module.exports= {createRequest, updateRequest, deleteRequest, getAllRequests, getRequestById}



