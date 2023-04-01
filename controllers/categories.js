const categoriesModel = require('../models/categorias')

const createCategory = async(body) =>{
    const newCategory = new categoriesModel(body)
    await newCategory.save()
    return newCategory
}

module.exports = {
    createCategory
}