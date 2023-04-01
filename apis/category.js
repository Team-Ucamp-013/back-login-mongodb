const express = require('express')
const router = express.Router()
const {categoryController} = require('../controllers')
const {createCategory} = categoryController


router.post('/', async(req,res) =>{
    const body = req.body 
    try{
        const newCategory = await createCategory(body)
        res.send(newCategory)
    } catch(error) {
        console.log(error)
    }
} )

module.exports = router