/**
 * Con base al JSON
 https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json
 *
   *   Insertar de forma multiple las peliculas que aparecen aquí.
     * Y     verifivar si se guardaron de forma correcta.
   * 
 

 * Hint * que se consulte  y haga el guarddo en la base de Datos
 */

/**
 * AJAX
 * Asynchronous Javascript And XML
 * Un llamado asyncrono entre servidores
 *
 * Lo vamos a hacer con la librería AXIOS
 */
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const { Movies } = require('./connection')
const portNumber = process.env.PORT || 3000

const mongoErr = (err) => {}
const app = express()
app.use(mongoErr)
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/public', express.static('public'))

app.set('view engine', 'ejs')

app.get('/', async (req, res, next) => {
  try {
    const result = await Movies.find({})
    res.render('index')
  } catch (err) {
    res.status(500)
    res.render('error')
  }
})

app.post('/', (req, res) => {
  console.log('TCL: post')
  res.redirect(302, '/')
})

app.listen(portNumber, () => {
  console.log(`Express web server started: ${portNumber}`)
})
