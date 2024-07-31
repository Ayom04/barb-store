const express = require("express");
const router = express.Router();
const {
  createProduct,
  editProduct,
  deleteProduct,
  getProducts,
  getProduct,
  viewStockLevel,
  hideProduct,
  getAvailableProducts,
  getAvailableProduct,
  addToCart,
  removeFromCart,
  viewCart,
  checkout,
} = require("../controllers/product.controller");

//admin
router.post("/", createProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/stock-notifications", viewStockLevel);
router.patch("/hide/:id", hideProduct);

//customer
router.get("/", getAvailableProducts);
router.post("/cart", addToCart);
router.get("/cart", viewCart);
router.post("checkout", checkout);
router.get("/", getAvailableProducts);
router.get("/:id", getAvailableProduct);

module.exports = router;
