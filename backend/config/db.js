import mongoose from "mongoose";
export const PORT = 3000

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);//1 means failure, 0 means successfull

    }
}