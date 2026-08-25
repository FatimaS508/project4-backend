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

module.exports={getAllCategories, getCategoryById}