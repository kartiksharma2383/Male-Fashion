const express=require("express");
const color=require("colors");
const dotenv=require("dotenv").config();
const morgan=require("morgan");
const rootroute=require('./routes/rootroute');
const connectDB=require("./config/db");
const productroute=require("./controllers/products/getproductcontroller")

const PORT=process.env.PORT || 7000 || 8080;
const app=express();

// app.get("/",(req,res)=>{
//     res.send("api is working");
// });
app.use('/',rootroute)
app.use('/fashiontrends',productroute)
connectDB();

app.listen(PORT,()=>{
    console.log(PORT);
    console.log(`Server is running on ${PORT}`.bgBlue.white)
});
