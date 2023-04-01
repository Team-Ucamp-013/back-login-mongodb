const express = require('express');
const cors = require('cors')
const app = express()
require('dotenv').config()
require('./db/mongodb')
const apiRouter = require('./apis')

app.use(cors())
app.use(express.json())

app.use('/api/v1', apiRouter)


app.get('/', (req, res) => {
  res.send({
    message: 'Funciona!!'
  })
})
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})