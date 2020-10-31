import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import products from './data/products.js';
import colors from "colors";


const app = express();
dotenv.config();

connectDB();




app.get('/', (req, res) => {
    res.send("API Running....");
});
app.get('/api/products', (req, res) => {
    res.json(products)
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});




const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} modeon port ${PORT}`.yellow.bold));