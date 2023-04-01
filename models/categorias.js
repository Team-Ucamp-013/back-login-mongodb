const mongoose = require('mongoose')
const {Schema,model} = mongoose

const categorieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    disponibilidad: {
        type: Number,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

const categoriesModel = model('categorys', categorieSchema )

module.exports = categoriesModel