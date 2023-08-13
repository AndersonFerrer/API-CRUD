import { Router } from 'express'
import { getProducts, createProducts, updateProducts, deleteProducts, getProduct } from '../controllers/products.controller.js'

const productRouter = Router()

productRouter.get('/products', getProducts)
productRouter.get('/products/:id', getProduct)
productRouter.post('/products', createProducts)
productRouter.put('/products/:id', updateProducts)
productRouter.delete('/products/:id', deleteProducts)



export default productRouter