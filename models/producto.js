const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { appConfig } = require('../config')

const productoSchema = new Schema({
  name: String,
  priceUnitary: Number,
  stock: Number,
  description: String,
  imgURL: String
}, {
  timestamps: true
})

productoSchema.methods.setUrlImg = function setUrlImg (filename) {
  const { host, port } = appConfig
  this.imgURL = `${host}:${port}/public/${filename}`
}
module.exports = mongoose.model('Products', productoSchema)
