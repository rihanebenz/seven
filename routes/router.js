
const express = require("express");
const router = express.Router();
const {getProducts,postProduct,getProductsById,updatProduct,deleteProduct}=require("../controllers/controoler");
router.route("/")
.get(getProducts)
.post(postProduct);
router.route("/:id")
.get(getProductsById)
.put(updatProduct)
.delete(deleteProduct)
module.exports =  router ;