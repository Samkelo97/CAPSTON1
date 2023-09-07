const express = require("express");
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const router = express.Router()
const productController = require("../controllers/product");
const cartController = require("../controllers/cartController.js");
const ordersController = require("../controllers/ordersController.js");
const Users = require('../models/users.js');
const users = new Users();
// Middleware
// router.use(bodyParser.json()); // bodyParser middleware
// router.use(verifyAToken);
//Import all model's objects
//User's router
router.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
router.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
router.post('/register',bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
router.put('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
router.patch('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
router.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})
router.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
// init express router
// const router = express.Router();
const {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = productController;
// Product routes
router.get("/products", productController.showProducts);
router.get("/products/:id", showProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
const showAllProducts = (req, res) => {
    showProducts(req, res); // Reuse the existing showProducts handler
  };
// Get all products route
router.get('/products/all', showAllProducts);
// Get products by category
router.get('/products/category/:category_id', productController.filterProducts);
// Cart routes
router.post("/cart", verifyAToken, bodyParser.json(), cartController.addToCart);
router.get("/cart/:user_id", verifyAToken, cartController.viewCart);
router.delete("/cart/:cart_id", cartController.removeFromCart);
// Orders routes
router.post("/orders", verifyAToken, bodyParser.json(), ordersController.placeOrder);
router.get("/orders/:user_id", verifyAToken, ordersController.viewOrderHistory);
module.exports = {router, verifyAToken};