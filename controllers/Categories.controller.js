const Category= require('../models/category')

async function getAllCategories(req,res){
    try{
        const getAll = await Category.find() 
        res.status(200).json(getAll)
    }catch(err){console.log(err)}
}

async function getCategoryById(req,res) {
    try{
        const getOne= await Category.findById(req.params.id, req.body)
        res.status(200).json(getOne)
    }catch(err){console.log(err)}
    
}

async function getSubcategoryById(req, res) {
  try {
    const { scategoryId } = req.params;

    const category = await Category.findOne({
      "subcategories._id": scategoryId
    });

    if (!category) {
      return res.status(404).json({
        message: "Subcategory not found"});
    }

    const scategory = category.subcategories.id(scategoryId);

    res.status(200).json({categoryId: category._id,scategory});
  }catch (err) {
    res.status(500).json({ message: err.message});
  }
}
module.exports={getAllCategories, getCategoryById, getSubcategoryById}