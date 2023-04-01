const UserModel = require('../models/users')

const getUsers = async () => {
  return await UserModel.find({})
}

const createUser = async (body) => {
  const newUser = new UserModel(body)
  await newUser.save()
  return newUser
}

const updateUser = async (_id, updateObject) => {
  return UserModel.findOneAndUpdate({ _id }, updateObject, {
    upsert: false,
    new: true
  })
}

const deleteUser = async (_id) => {
  return UserModel.findOneAndDelete({ _id })
}

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser
}