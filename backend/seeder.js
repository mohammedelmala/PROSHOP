import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import products from "./data/products.js";

import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
import Order from "./models/OrderModel.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const insertedUsers = await User.insertMany(users);
        const adminUser = insertedUsers[0];
        //console.log(adminUser);
        const sampleProducts = products.map(prod => {
            return { ...prod, user: adminUser }
        })
        await Product.insertMany(sampleProducts);
        console.log("Imported completed".green.inverse);
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1)
            ;
    }

}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Destry completed".blue.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
}
else {
    importData();
}


