const { v4: uuidv4 } = require("uuid");
const Product = require("../models/products.models");

//admin
const createProduct = async (req, res) => {};
//admin
const editProduct = async (req, res) => {};
//admin
const deleteProduct = async (req, res) => {};
//admin
const getProducts = async (req, res) => {};
//admin
const getProduct = async (req, res) => {};
//admin
const viewStockLevel = async (req, res) => {};
//admin
const hideProduct = async (req, res) => {};

//customer
const getAvailableProducts = (req, res) => {};
//customer
const getAvailableProduct = (req, res) => {};
//customer
const addToCart = (req, res) => {};
//customer
const removeFromCart = (req, res) => {};
//customer
const viewCart = (req, res) => {};
//customer
const checkout = (req, res) => {};

module.exports = {
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
};
