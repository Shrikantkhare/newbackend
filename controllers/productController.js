const mongoose = require("mongoose");
const productModel = require("../models/productModel")
const {isValidRequestBody, isValid }=require("../Middleware/validation");

const addProduct = async function (req, res) {
    try{
     let requestBody = req.body

    // console.log(requestBody);
     if (!isValidRequestBody(requestBody)) return res.status(400).send({ status: false, message: "Invalid request, please provide details" })
     let { title,price,description,category,image,rating } = requestBody
      
     if(!isValid(title)){
        return res.status(400).send({ status: false, message: "Title is required" });  
       }
    if(!isValid(price)){
        return res.status(400).send({ status: false, message: "price is required" });  
       }
    if(!isValid(description)){
        return res.status(400).send({ status: false, message: "description is required" });  
       }    
    if(!isValid(category)){
        return res.status(400).send({ status: false, message: "category is required" });  
       }    
    if(!isValid(image)){
        return res.status(400).send({ status: false, message: "image is required" });  
       }
    if(!isValid(rating)){
        return res.status(400).send({ status: false, message: "rating is required" });
          
       }
       if(!isValid(rating.rate)|| !isValid(rating.count))return res.status(400).send({ status: false, msg: "rate and count address are mandatory field" })

    const productdetails=  { title,price,description,category,image,rating } 
    
    // console.log(productdetails);
    const saveproduct = await productModel.create( productdetails);
    return res.status(201).send({ status: true, message: "product details", data: saveproduct })

    }catch (err) {
        return res.status(500).send({ status: false, error: err.message })
    }
}

const getAllproducts=async (req,res)=>{
try{
const result= await productModel.find();
// console.log(result);
if (!result) return res.status(404).send({ status: false, msg: "data not found " })

  return res.status(200).send({ status: true, msg: "products details", data: result })
}catch (err) {
    return res.status(500).send({ status: false, msg: err.message })
  }
}

const getproductById= async (req,res)=>{
try{
const productId = req.params.productId;
console.log(productId);
if(!isValid(productId)){
    return res.status(400).send({ status: false, message: "productId is required" });  
   }

   const productdata= await productModel.findById({_id:productId,  isDeleted: false, deletedAt: null})
console.log(productdata);
   if (!productdata) return res.status(404).send({ status: false, msg: "data not found " })
  return res.status(200).send({ status: true, msg: "products details", data: productdata })
}catch(err){
    return res.status(500).send({ status: false, msg: err.message })
}
}

module.exports={addProduct,getAllproducts,getproductById}