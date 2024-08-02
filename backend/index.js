import express from "express";
import { PORT } from "./config.js";
import connectDB from "./db/db.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors())
await connectDB();

app.get('/', (req, res) => {
    return res.status(200).send("Hello!")
})

app.use('/books', booksRoute);


app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`)
})