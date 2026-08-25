const mongoose= require('mongoose')

const formFieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  label: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ["text", "number", "select", "textarea", "date", "file", "tel"],
    required: true
  },

  required: {
    type: Boolean,
    default: false
  },

  options: {
    type: [String],
    default: []
  }
});

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  about: {
    type: String,
    default: "",
    trim: true
  },
  formFields: {
    type: [formFieldSchema],
    default: []
  }
});

const categorySchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    about:{type: String},
    subcategories:[ subcategorySchema],
    default: []
})

const Category= mongoose.model("Category", categorySchema)

module.exports= Category