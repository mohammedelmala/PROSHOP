import express from "express";
const router = express.Router();
import Product from "../models/ProductModel.js";
import asyncHandler from "express-async-handler";

// @desc Fetch all Products
// @route /api/products
// @access public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products)
}));

// @desc Fetch Product
// @route /api/products/:id
// @access public
router.get('/:id', asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id);
    console.log("xxxxxxxxxxxxxxxxx" + req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product does not found" });
    }

}));


export default router;