import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
import { connectDB } from './config/db.js';
import productsRoute from './routes/productsRoute.js'
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

app.use("/api/products", productsRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`server started at port: ${PORT}`)
})