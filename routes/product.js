const express = require('express')
const router = express.Router()
const upload = require('../libs/storage')
const { addProduct, getProducts } = require('../controllers/productController')

router.get('/product', getProducts)

router.post('/product', upload.single('image'), addProduct)
module.exports = router
