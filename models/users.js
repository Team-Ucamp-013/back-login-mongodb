const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  lastName: String,
  age: Number,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{
    versionKey: false,
    timestamps: true
})



userSchema.pre('save', function(next){
 console.log('-----Antes-->',this.email, this.password)
 const hashedPassword = bcrypt.hashSync(this.password, 12)
 this.password = hashedPassword
 console.log('-----Despues-->',this.email, this.password)

 next()
})

const userModel = model('users', userSchema)
module.exports = userModel