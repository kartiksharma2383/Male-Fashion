const mongoose = require("mongoose");
const productcollection = require('../../models/ProductSchema');
const ProductCollection = require("../../models/ProductSchema");
const getproductcontroller = async(req,res)=>{
    try {
        const { id, category, name, subcategory } = req.params;
        let product;
        if (category) {
            const searchCategory = category.toLowerCase();
            product = await ProductCollection.find({ category: { $regex: new RegExp(searchCategory, 'i') } });
        } 
        else if (name) {
            const searchName = name.toLowerCase();
            product = await ProductCollection.find({ name: { $regex: new RegExp(searchName, 'i') } });
        } 
        else if(req.path.includes("/random")){
            product=await ProductCollection.aggregate([
                {
                    $sample: {
                        size:9
                },
            },
            ]);
        }
        else if (subcategory) {
            const searchSubcategory = subcategory.toLowerCase();
            product = await ProductCollection.find({ sub_category: { $regex: new RegExp(searchSubcategory, 'i') } });
        } 
        else if(id){
            product=await ProductCollection.find([{
                _id:id
            }]);
        }
        else if(req.path.includes("/top-rated")){
            product=await ProductCollection.find().sort({rating: -1}).limit(9);
        }
        else if(req.path.includes("/lowtohigh")){
            product=await ProductCollection.find().sort({new_price: 1}).limit(9);
        }
        else {
            product = await ProductCollection.find();
        }
        if (!product || product.length === 0) {
            res.status(404).send({ message: "No products found" });
        } 
        else {
            res.status(200).send(product);
        }
        console.log("Product fetched successfully");
    } catch (error) {
        res.status(500).send({ message: "Error in fetching data" });
        console.error(`Error occurred: ${error}`);
    }
};
module.exports = getproductcontroller; 
