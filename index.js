const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>console.log("connection success")).catch(()=>console.log(" connection failed"))


const app= express();
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());
app.use("/api/products",router)
app.get("/", async(req,res)=>{
    const products = await( await fetch("http://localhost:4000/api/products")).json();
    console.log(products);
    res.status(200).render("index",{products:products.data})
})

app.listen(4000,()=>{

    console.log("server is listining on post 4000 ");

})

