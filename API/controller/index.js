const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../Middleware/authentication')
const routes = express.Router()
//Import all model's objects
const {users, products} = require('../Model')
const CartController = require('./cartController')
//User's router
routes.get('/users',
(req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/users/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register',bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
routes.put('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req,res)
})
routes.patch('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id', (req, res)=>{
    users.delete(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
// products
routes.get('/products', (req, res) => {
    products.getProducts(req, res)
})
// Get a single product route
routes.get('/products/:id', (req, res) => {
    products.getProduct(req, res)
})
// Add a product route
routes.post('/add-products', bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
})

// Update a single route route
routes.patch('/products/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
    
    routes.put('/products/:id', bodyParser.json(), (req, res) => {
        products.updateProduct(req, res)
    })
    
})
// Delete a product route
routes.delete('/products/:id', (req, res) => {
    products.deleteProduct(req, res)
})
// Delete a product route

// const {getCartItemsByUserId} = require('../Model/cartModel')

// Add a product to the cart
// routes.post('/cart/:userID', bodyParser.json(), (req, res) => {
//   products.addItem(req.res)
// });

const {
    showCart,
    showCartById,
    createCart,
    updateCart,
    deleteCart,
    
  } = CartController;
  // Get All Cart
  routes.get("/cart/:userID", showCart);
  
  // Get Single Cart
  routes.get("/cart/:id", showCartById);
  
  // Create New Cart
  routes.post("/cart", createCart);
  
  // Update Cart
  routes.patch("/cart/:id", updateCart);
  
  // Delete Cart
  routes.delete("/cart/:id", deleteCart);


  //
  
  
  
  
  
  
  
  
  
// Retrieve the cart contents for a user
// routes.get('/cart/:userID', (req, res) => {
//     products.getItem(req.res)
// });
// routes.get('/cart/:userID', (req, res) => {
//     getCartItemsByUserId.showCart(req.res)
// });

// Update the quantity of a product in the cart
// routes.put('/cart/:cartItemId', bodyParser.json(), (req, res) => {
//     products.updateItem(req.res)
// });

// Remove a product from the cart
// routes.delete('/cart/:cartItemId', (req, res) => {
//     products.deleteItem(req, res)
// });


module.exports = {
    express,
    routes,
    verifyAToken
}