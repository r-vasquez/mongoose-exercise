// const mongoose = require('mongoose')
require('dotenv').config()
const MoviesSchema = require('./db-sch')
const { model, connect, connection } = require('mongoose')

connect(process.env.URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error('Error'))

connection.on('open', (_) => {
  console.log('Database is connected to', process.env.URI)
})

const Movies = model('MoviesCollection', MoviesSchema)

module.exports = {
  Movies, //<=> Movies: Movies,
}
