import mongoose from 'mongoose';
import { mongodbURL } from '../config.js';


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/book-store');
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;