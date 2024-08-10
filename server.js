const express=require("express");
const color=require("colors");
const dotenv=require("dotenv").config();
const morgan=require("morgan");
const rootroute=require('./routes/rootroute');
const connectDB=require("./config/db");
const productroute=require("./routes/movieroutes")

const PORT=process.env.PORT || 7000 || 8080;
connectDB();
const app=express();

// app.get("/",(req,res)=>{
//     res.send("api is working");
// });
app.use('/',rootroute)
app.use('/movies',productroute)

app.listen(PORT,()=>{
    console.log(PORT);
    console.log(`Server is running on ${PORT}`.bgBlue.white)
});
