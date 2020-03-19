// En este archivo creare el Schema para movies

const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  rank: Number,
  id: String,
})

module.exports = movieSchema
