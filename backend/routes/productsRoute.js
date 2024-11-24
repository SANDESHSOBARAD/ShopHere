import express from 'express';

import { getProducts, createProducts, updateProduct, deleteProduct  } from '../controllers/productControllers.js';

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)

export default router;
