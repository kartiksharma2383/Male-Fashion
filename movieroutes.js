const getmoviecontroller=require("../controllers/movies/getmoviecontroller");
const express=require("express")
const router=express.Router();
router.get("/",getmoviecontroller);
router.get("/id/:id",getmoviecontroller);
router.get("/title/:title", getmoviecontroller);
module.exports=router;