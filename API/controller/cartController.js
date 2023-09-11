const { insertCartItem, getCartItemsByProductId, deleteCartItem } = require("../Model/cartModel.js");
// Add item to cart
const addToCart = (req, res) => {
    const data = req.body;
    insertCartItem(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};
// View user's cart
const viewCart = (req, res) => {
    const user_id = req.params.user_id;
    getCartItemsByProductId(user_id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};
// Delete item from cart
const removeFromCart = (req, res) => {
    const cart_id = req.params.cart_id;
    deleteCartItem(cart_id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};
module.exports = {
    addToCart,
    viewCart,
    removeFromCart,
};