import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const port = 3000

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB Connected")
}).catch((err) => {
    console.log(err);
});

const app = express();
app.listen(3000, () => {
    console.log('listening on port ' + port)
});