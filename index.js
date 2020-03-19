/**
 * Con base al JSON
 * https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json
 *
 * Insertar de forma multiple las peliculas que aparecen aquí.
 * Y verifivar si se guardaron de forma correcta.
 *
 * Hint:// Usar Axios para hacer el llamado http y crear una ruta en Express POST
 * que se consulte  y haga el guarddo en la base de Datos
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
const portNumber = process.env.PORT || 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')


app.listen(portNumber, () => {
  console.log(`Express web server started: ${portNumber}`)
})
