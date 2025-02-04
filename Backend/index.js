import mongoose from "mongoose";
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import express from "express";
import cors from 'cors'
const app=express();
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT|| 4001;
const uri = "mongodb+srv://hasaanraza:94948476@bookstore.qtmsa.mongodb.net/BookStore?retryWrites=true&w=majority&appName=BookStore";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => console.log("Error connecting to MongoDB:", error));
//
// defining routese
app.use("/book",bookRoute);
app.use("/user",userRoute)
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})