import mongoose from "mongoose";

import Product from '../models/productsModel.js';

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success: true, count: products.length,  data: products});
    } catch (error) {
        console.log(error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const createProducts = async (req, res) => {
    const product = req.body; // user will send this data

	if (!product.name || !product.price || !product.image) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error in Create product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body; // user will send this data

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        
    } catch (error) {
        console.error("Error in updating product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
        
    }

}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        return res.status(200).json({message: 'Product has been deleted'})
        
    } catch (error) {
        console.error("Error in deleting product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
        
    }
}

