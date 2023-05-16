const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const productController =require("../controllers/productController");

router.post("/register", userController.registerUser)
router.post("/add-products", productController.addProduct)
router.get("/products", productController.getAllproducts)
router.get("/products/:productId", productController.getproductById)


module.exports = router;
