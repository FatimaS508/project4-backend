const connectToDB = require('./config/db.js')
const Category = require('./models/category.js')
const dotenv = require("dotenv").config() 

connectToDB()

async function seedDB() {
  try {
    await Category.deleteMany({})
    const Categories = await Category.insertMany([
      { //1
        name: "Application and Account Services.",
        about: "",

        subcategories: [
          {
            name: "HR account",
            about: "request new account - modify user permissions - delete user or transfer user",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "employeeId",
                label: "Employee ID",
                type: "text",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "Create New Account",
                  "Modify User Permissions",
                  "Delete User Account",
                  "Transfer User"
                ]
              },
              {
                name: "department",
                label: "Current Department",
                type: "text",
                required: true
              },
              {
                name: "newDepartment",
                label: "New Department (For User Transfer)",
                type: "text",
                required: false
              },
              {
                name: "requiredPermissions",
                label: "Required Permissions",
                type: "textarea",
                required: false
              },
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              },
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              }
            ]
          },
          {
            name: "entry & exit system",
            about: "request new user account - modify user permission",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "employeeId",
                label: "Employee ID",
                type: "text",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "Create New Account",
                  "Modify User Permissions"
                ]
              },
              {
                name: "department",
                label: "Department",
                type: "text",
                required: true
              },
              {
                name: "jobTitle",
                label: "Job Title",
                type: "text",
                required: true
              },
              {
                name: "requiredPermissions",
                label: "Required Permissions",
                type: "textarea",
                required: false
              },
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              },
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              }
            ]
          },
          {
            name: "Create a new email address",
            about: "create new, activiate, Deactivate, or reactivate email address, No attachments are required.",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "employeeId",
                label: "Employee ID",
                type: "text",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "Create New Email Address",
                  "Activate Email Address",
                  "Deactivate Email Address",
                  "Reactivate Email Address"
                ]
              },
              {
                name: "emailAddress",
                label: "Email Address (If Available)",
                type: "text",
                required: false
              },
              {
                name: "department",
                label: "Department",
                type: "text",
                required: true
              },
              {
                name: "jobTitle",
                label: "Job Title",
                type: "text",
                required: true
              },
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              }
            ]
          },
          {
            name: "Murasalat account system",
            about: "this system for managing documents. The service for create new account - modify permissions",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "employeeId",
                label: "Employee ID",
                type: "text",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "Create New Account",
                  "Modify Permissions"
                ]
              },
              {
                name: "department",
                label: "Department",
                type: "text",
                required: true
              },
              {
                name: "jobTitle",
                label: "Job Title",
                type: "text",
                required: true
              },
              {
                name: "requiredPermissions",
                label: "Required Permissions",
                type: "textarea",
                required: false
              },
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              },
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              }
            ]
          },
          {
            name: "Microsoft teams account",
            about: "request create new account. No attachments are required.",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "employeeId",
                label: "Employee ID",
                type: "text",
                required: true
              },
              {
                name: "emailAddress",
                label: "Email Address",
                type: "text",
                required: true
              },
              {
                name: "department",
                label: "Department",
                type: "text",
                required: true
              },
              {
                name: "jobTitle",
                label: "Job Title",
                type: "text",
                required: true
              },
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              }
            ]
          },
          {
            name: "Multi-factor Authentication support",
            about: "Activate MFA and authentication code",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "Activate MFA",
                  "Authentication Code Not Received",
                  "Authentication Code Not Working",
                  "Change Registered Phone",
                  "Reset MFA",
                  "Other"
                ]
              },
              {
                name: "relatedSystem",
                label: "Related System",
                type: "text",
                required: true
              },
              {
                name: "problemDescription",
                label: "Problem Description",
                type: "textarea",
                required: true
              },
              {
                name: "attachments",
                label: "Screenshot or Additional Attachment",
                type: "file",
                required: false
              }
            ]
          },
        ]
      },

      {//2
        name: "Maintenance",
        about: "",

        subcategories: [
          {
            name: "Repair & maintenance support",
            about: "Software or hardware issue. Must include a detailed description of the problem.",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "issueType",
                label: "Issue Type",
                type: "select",
                required: true,
                options: [
                  "Hardware Issue",
                  "Software Issue",
                  "Other"
                ]
              },
              {
                name: "deviceType",
                label: "Device Type",
                type: "select",
                required: true,
                options: [
                  "Desktop Computer",
                  "Laptop",
                  "Tablet",
                  "Printer",
                  "Scanner",
                  "Other"
                ]
              },
              {
                name: "assetNumber",
                label: "Device Asset Number (If Available)",
                type: "text",
                required: false
              },
              {
                name: "problemDescription",
                label: "Detailed Problem Description",
                type: "textarea",
                required: true
              },
              {
                name: "location",
                label: "Device Location",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Photos or Additional Attachments",
                type: "file",
                required: false
              }
            ]
          },
          {
            name: "Server support & maintenance",
            about: "Server support and Equipment maintenance",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "Technical Support",
                  "Maintenance",
                  "Configuration",
                  "Installation",
                  "Performance Issue",
                  "Other"
                ]
              },
              {
                name: "serverName",
                label: "Server Name",
                type: "text",
                required: true
              },
              {
                name: "serverType",
                label: "Server Type",
                type: "select",
                required: true,
                options: [
                  "Physical Server",
                  "Virtual Server",
                  "Other",
                  "Not Sure"
                ]
              },
              {
                name: "problemDescription",
                label: "Problem Description",
                type: "textarea",
                required: true
              },
              {
                name: "location",
                label: "Server or Equipment Location",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          }
        ]
      },
      { //3
        name: "Network services",
        about: "",

        subcategories: [
          {
            name: "Cabel services",
            about: "All about cabels (Routing, disconnection, and repair). Attachments: no need.",
            formFields: [
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              },
              {
                name: "requestedFor",
                label: "Requested For",
                type: "text",
                required: true
              },
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "New Installation",
                  "Repair",
                  "Relocation",
                  "Disconnection"
                ]
              },
              {
                name: "portType",
                label: "Port Type",
                type: "select",
                required: true,
                options: [
                  "Computer",
                  "Telephone",
                  "Computer and Telephone"
                ]
              },
              {
                name: "connectionScope",
                label: "Connection Scope",
                type: "select",
                required: true,
                options: [
                  "Internal",
                  "External"
                ]
              },
              {
                name: "attachment",
                label: "Additional Attachment",
                type: "file",
                required: false
              }
            ]
          },
          {
            name: "Internet and Network Access.",
            about: "Make sure to enter the correct info.",
            formFields: [
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "networkType",
                label: "Network Type",
                type: "select",
                required: true,
                options: [
                  "Government Network",
                  "LAN",
                  "Protected Network",
                  "Wireless Network"
                ]
              },
              {
                name: "area",
                label: "Area",
                type: "text",
                required: true
              },
              {
                name: "building",
                label: "Building (Write the Exact Location)",
                type: "text",
                required: true
              },
              {
                name: "floor",
                label: "Floor",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          },
          {
            name: "Fiber request",
            about: "New fiber installation request",
            formFields: [
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "New Installation",
                  "Repair",
                  "Relocation",
                  "Disconnection"
                ]
              },
              {
                name: "area",
                label: "Area",
                type: "text",
                required: true
              },
              {
                name: "building",
                label: "Building (Write the Exact Location)",
                type: "text",
                required: true
              },
              {
                name: "floor",
                label: "Floor",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          }
        ]
      },
      { //4
        name: "Device Services",
        about: "Requests related to IT devices, equipment, and accessories.",

        subcategories: [
          {
            name: "New Device Request",
            about: "Request a new desktop computer, laptop, tablet, or other work device.",
            formFields: [
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "deviceType",
                label: "Device Type",
                type: "select",
                required: true,
                options: [
                  "Desktop Computer",
                  "Laptop",
                  "Tablet",
                  "Monitor",
                  "Other"
                ]
              },
              {
                name: "quantity",
                label: "Quantity",
                type: "number",
                required: true
              },
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              },
              {
                name: "department",
                label: "Department",
                type: "text",
                required: true
              },
              {
                name: "officeLocation",
                label: "Office Location",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          },
          {
            name: "Device Replacement",
            about: "Replace an old, damaged, or unsupported work device.",
            formFields: [
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "deviceType",
                label: "Device Type",
                type: "select",
                required: true,
                options: [
                  "Desktop Computer",
                  "Laptop",
                  "Tablet",
                  "Monitor",
                  "Other"
                ]
              },
              {
                name: "assetNumber",
                label: "Device Asset Number",
                type: "text",
                required: true
              },
              {
                name: "replacementReason",
                label: "Reason for Replacement",
                type: "select",
                required: true,
                options: [
                  "Damaged",
                  "Old",
                  "Unsupported",
                  "Poor Performance",
                  "Other"
                ]
              },
              {
                name: "problemDescription",
                label: "Problem Description",
                type: "textarea",
                required: true
              },
              {
                name: "officeLocation",
                label: "Office Location",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Device Photo or Additional Attachments",
                type: "file",
                required: false
              }]
          },
          {
            name: "Device Transfer",
            about: "Transfer a device from one employee, department, or location to another.",
            formFields: [
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "deviceType",
                label: "Device Type",
                type: "select",
                required: true,
                options: [
                  "Desktop Computer",
                  "Laptop",
                  "Tablet",
                  "Monitor",
                  "Printer",
                  "Other"
                ]
              },
              {
                name: "assetNumber",
                label: "Device Asset Number",
                type: "text",
                required: true
              },
              {
                name: "transferType",
                label: "Transfer Type",
                type: "select",
                required: true,
                options: [
                  "Transfer to Another Employee",
                  "Transfer to Another Department",
                  "Transfer to Another Location"
                ]
              },
              {
                name: "currentLocation",
                label: "Current Location",
                type: "text",
                required: true
              },
              {
                name: "newLocation",
                label: "New Location",
                type: "text",
                required: true
              },
              {
                name: "newEmployeeOrDepartment",
                label: "New Employee or Department",
                type: "text",
                required: true
              },
              {
                name: "transferReason",
                label: "Reason for Transfer",
                type: "textarea",
                required: true
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          },
          {
            name: "Device Setup and Installation",
            about: "Set up a new device and install the required operating system and applications.",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "deviceType",
                label: "Device Type",
                type: "select",
                required: true,
                options: [
                  "Desktop Computer",
                  "Laptop",
                  "Tablet",
                  "Other"
                ]
              },
              {
                name: "assetNumber",
                label: "Device Asset Number",
                type: "text",
                required: true
              },
              {
                name: "setupType",
                label: "Setup Type",
                type: "select",
                required: true,
                options: [
                  "New Device Setup",
                  "Operating System Installation",
                  "Application Installation",
                  "Complete Setup"
                ]
              },
              {
                name: "requiredApplications",
                label: "Required Applications",
                type: "textarea",
                required: false
              },
              {
                name: "officeLocation",
                label: "Office Location",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          },
          {
            name: "Printer and Scanner Request",
            about: "Request, install, move, or configure a printer or scanner.",
            formFields: [
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "deviceType",
                label: "Device Type",
                type: "select",
                required: true,
                options: [
                  "Printer",
                  "Scanner",
                  "Multi-Function Printer"
                ]
              },
              {
                name: "requestType",
                label: "Request Type",
                type: "select",
                required: true,
                options: [
                  "New Device",
                  "Installation",
                  "Relocation",
                  "Configuration"
                ]
              },
              {
                name: "assetNumber",
                label: "Device Asset Number (If Available)",
                type: "text",
                required: false
              },
              {
                name: "currentLocation",
                label: "Current Location (If Applicable)",
                type: "text",
                required: false
              },
              {
                name: "requiredLocation",
                label: "Required Location",
                type: "text",
                required: true
              },
              {
                name: "additionalDetails",
                label: "Additional Details",
                type: "textarea",
                required: false
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          },
          {
            name: "Computer Accessories Request",
            about: "Request accessories such as a monitor, keyboard, mouse, headset, docking station, or charger.",
            formFields: [
              {
                name: "managerApproval",
                label: "Manager Approval",
                type: "file",
                required: true
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true
              },
              {
                name: "accessoryType",
                label: "Accessory Type",
                type: "select",
                required: true,
                options: [
                  "Monitor",
                  "Keyboard",
                  "Mouse",
                  "Headset",
                  "Docking Station",
                  "Charger",
                  "Other"
                ]
              },
              {
                name: "quantity",
                label: "Quantity",
                type: "number",
                required: true
              },
              {
                name: "deviceAssetNumber",
                label: "Related Device Asset Number (If Available)",
                type: "text",
                required: false
              },
              {
                name: "justification",
                label: "Request Justification",
                type: "textarea",
                required: true
              },
              {
                name: "officeLocation",
                label: "Office Location",
                type: "text",
                required: true
              },
              {
                name: "attachments",
                label: "Additional Attachments",
                type: "file",
                required: false
              }
            ]
          }
        ]
      }
    ])
  } catch (err) { console.log(err) }
}

seedDB()
