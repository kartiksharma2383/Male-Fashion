const getproductcontroller=require("../controllers/products/getproductcontroller")
const express=require("express")
const router=express.Router()
router.get("/",getproductcontroller)
module.exports=router