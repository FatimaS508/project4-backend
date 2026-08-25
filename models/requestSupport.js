const mongoose = require('mongoose')

const requestSupportSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High", "Urgent"],
            default: "Medium"
        },
        Status: {
            type: String,
            enum: ['New',"In progress", "Resolved", "Closed"],
            default: 'New'
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
        replies: [
            {
                message: {
                    type: String
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
                ],
                createdAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ]


    },{timestamps: true}
)

const Request = mongoose.model("Request", requestSupportSchema )

module.exports= Request