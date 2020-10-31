
import mongoose from 'mongoose';
import colors from "colors";


//mongoose.connect('mongodb://localhost:27017/proshop', { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`Mongodb Connected: ${db.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);

    }
}

export default connectDB;