import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
import { connectDB } from './config/db.js';
import productsRoute from './routes/productsRoute.js'
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/api/products", productsRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`server started at port: ${PORT}, hello there`)
})