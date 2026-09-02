const mongoose = require('mongoose')

const replySchema = new mongoose.Schema(
  {
    message: {
      type: String,
      trim: true,
      required: true
    },

    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    attachments: [
      {
        url: {
          type: String,
          required: true
        },
        fileType: {
          type: String,
          enum: ["image", "document", "audio"],
          required: true
        },
        fileName: String
      }
    ]
  },
  { timestamps: true }
);

const requestSupportSchema = new mongoose.Schema(
    {
       requestNumber: {
         type: Number,
         required: true,
         unique: true
       },
        title: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High", "Urgent"],
            default: "Medium"
        },
        status: {
            type: String,
            enum: ['New',"Waiting for confirmation", "Resolved", "Rejected"],
            default: 'New'
        },
        rejectionReason: {
          type: String,
           default: ""
       },
        attachments: {
            type: [String]
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true

        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        subcategoryId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        requestDetails: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        replies: [replySchema]


    }, { timestamps: true }
)

const Request = mongoose.model("Request", requestSupportSchema)

module.exports = Request