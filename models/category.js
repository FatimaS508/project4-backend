const mongoose= require('mongoose')

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