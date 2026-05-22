const {
  addProducts,
  editProducts,
  deleteProduct,
  getProductBasedOnId,
  filterProductsBasedOnPrice,
  sortProductsBasedOnPrices,
  getAllProducts,
} = require("../controller/productController");
const verifyToken = require("../middleware/verifyToken");
const isAdmin = require("../middleware/authAdmin");
const express = require("express");
const { route } = require("./productRouter");
const router = express.Router();

router.post("/add-products", verifyToken, isAdmin, addProducts);
router.get("/get-allproducts",getAllProducts);
router.get("/get-product/:id",getProductBasedOnId);
router.delete("/delete-product/:id", verifyToken, isAdmin, deleteProduct)
router.put("/edit-product/:id",  verifyToken, isAdmin ,editProducts);
router.get("/filter-products",filterProductsBasedOnPrice);
router.get("/sort-products",sortProductsBasedOnPrices)

module.exports = router;










































//filter product based on price
const filterProductsBasedOnPrice = async (req, res)=>{
try{
  const {max,min} = req.query;
  const filterProduct = await ProductModel.find({
    price:{$gte:min},
    price:{$lte:max},

  });
  res.status(200).json({ filterProduct});
}catch(error){
  res.status(500).json({message:"failed to filter",error});


}
}