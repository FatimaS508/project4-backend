const connectToDB = require('./config/db.js')
const Category = require('./models/category.js')
const dotenv = require("dotenv").config() 

connectToDB()

async function seedDB(){
    try{
        await Category.deleteMany({})
        const Categories= await Category.insertMany([
  { //1
    name: "Application and Account Services.",
    about: "",

    subcategories: [
      {
        name: "HR account",
        about: "request new account - modify user permissions - delete user or transfer user"
      },
      {
        name: "entry & exit system",
        about: "request new user account - modify user permission"
      },
      {
        name: "Create a new email address",
        about: "create new, activiate, Deactivate, or reactivate email address, no attachments needed"
      },
      {
        name: "Murasalat account system",
        about: "this system for managing documents. The service for create new account - modify permissions"
      },
      {
        name: "Microsoft teams account",
        about: "request create new account. Attachments: no need"
      },
      {
        name: "Multi-factor Authentication support",
        about: "Activate MFA and authentication code"
      },
    ]
  },

  {//2
    name: "Maintenance",
    about: "",

    subcategories: [
      {
        name: "Repair & maintenance support",
        about: "Software or hardware issue. Must include a detailed description of the problem."
      },
      {
        name: "Server support & maintenance",
        about: "Server support and Equipment maintenance"
      }
    ]
  },
  { //3
    name: "Network services",
    about: "",

    subcategories: [
      {
        name: "Cabel services",
        about: "All about cabels (Routing, disconnection, and repair). Attachments: no need."
      },
      {
        name: "Internet and Network Access.",
        about: "Make sure to enter the correct info."
      },
      {
        name: "Fiber request",
        about: "New fiber installation request"
      }
    ]
  },
  { //4
  name: "Device Services",
  about: "Requests related to IT devices, equipment, and accessories.",

  subcategories: [
    {
      name: "New Device Request",
      about: "Request a new desktop computer, laptop, tablet, or other work device."
    },
    {
      name: "Device Replacement",
      about: "Replace an old, damaged, or unsupported work device."
    },
    {
      name: "Device Transfer",
      about: "Transfer a device from one employee, department, or location to another."
    },
    {
      name: "Device Setup and Installation",
      about: "Set up a new device and install the required operating system and applications."
    },
    {
      name: "Printer and Scanner Request",
      about: "Request, install, move, or configure a printer or scanner."
    },
    {
      name: "Computer Accessories Request",
      about: "Request accessories such as a monitor, keyboard, mouse, headset, docking station, or charger."
    }
  ]
}
])
    }catch(err){console.log(err)}
}

seedDB()
