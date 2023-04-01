const mongoose = require('mongoose')

const url = `mongodb+srv://${process.env.USER_MONGO}:${process.env.USER_MONGO_PASS}@cluster0.${process.env.MONGO_ID_PASS}.mongodb.net/users?retryWrites=true&w=majority`

mongoose.connect(url)
.then(()=>{
    console.log('---------------------------')
    console.log('La base de datos esta conectada')
    console.log('---------------------------')
})
.catch((error)=>{
console.error(error)
})

module.exports = mongoose