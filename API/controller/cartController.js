const { getCart, getCartById, insertCart, updateCartById, deleteCartById } = require("../models/Cart");
// Get All in Cart
const showCart = (req, res) => {
    getCart(req.params.userID,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Get Single Cart
const showCartById = (req, res) => {
    getCartById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Create New Cart
const createCart = (req, res) => {
    const data = req.body;
    insertCart(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Update Cart
const updateCart = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCartById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Delete Product
const deleteCart = (req, res) => {
    const id = req.params.id;
    deleteCartById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
module.exports = {
    showCart,
    showCartById,
    createCart,
    updateCart,
    deleteCart
}