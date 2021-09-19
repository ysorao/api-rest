import { Router } from "express";
import  { getProducts, createNewProduct, getProductById, deleteProduct, updateProduct, getTotalProducts} from '../controllers/products.controller';

const router = Router()

router.get('/products', getProducts)

router.post('/products', createNewProduct)

router.get("/products/:id", getProductById)

router.delete('/products/:id', deleteProduct)


router.get("/count", getTotalProducts)

router.put('/products/:id', updateProduct)

export default router
