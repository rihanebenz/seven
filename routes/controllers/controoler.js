const product_model = require("../models/model");
exports.getProducts = async(req,res)=>{
try {
    const products = await product_model.find()
    res.status(200).json({
        status :"success",
        results:products.length,
        data : products
    })
} catch (error) {
    res.status(404).json({
        status:"fail ",
        message: "can not find document"
    })
};
}
exports.postProduct= async(req,res)=>{
    try {
        const sevedProduct = await product_model.create(req.body)
        res.status(200).json({
            status :"success",
            data : sevedProduct,
        })
    } catch (error) {
        res.status(404).json({
            status:"fail ",
            message: "can not save document"
        })
    }
};
exports.getProductsById = async(req,res)=>{
    try {
        const product = await product_model.findById(req,params.id)
        res.status(200).json({
            status :"success",
            data : product 
        })
    } catch (error) {
        res.status(404).json({
            status:"fail ",
            message: "can not find document"
        })
    }
};
exports.updatProduct=async(req,res)=>{
    try {
        const updatProduct = await product_model.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            status :"success",
            data : updatProduct
        })
    } catch (error) {
        res.status(404).json({
            status:"fail ",
            message: "can not  update document"
        })
    }
};
exports.deleteProduct = async(req,res)=>{
    try {
        const deleteProduct = await product_model.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status :"success",
            data : deleteProduct
        })
    } catch (error) {
        res.status(404).json({
            status:"fail ",
            message: "can not  delete  document"
        })
    }
}