import mongoose from "mongoose";
const bookSchema=mongoose.Schema({
name:String,
price:Number,
category:String,
image:String,
title:String,
})
const book=mongoose.model("Book",bookSchema,'books')
export default book;