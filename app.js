const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/product')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/v1', productRoutes)
app.use('/public', express.static(`${path.resolve()}/files/imgs`))
app.use(cors())
module.exports = app
