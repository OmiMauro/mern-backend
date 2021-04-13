const Product = require('../models/producto')

async function addProduct (req, res) {
  try {
    const { name, priceUnitary, stock, description } = req.body
    const product = Product({ name, priceUnitary, stock, description })
    if (req.file) {
      const { filename } = req.file
      console.log(filename)
      product.setUrlImg(filename)
    }
    const productStored = await product.save()

    res.status(200).send({ productStored })
  } catch (e) {
    res.status(500).send({ message: e.message })
  }
}
async function getProducts(req, res){
  const products =  await Product.find().lean().exec();
  res.status(200).send({products})
}
module.exports = {
  addProduct,
  getProducts
}
