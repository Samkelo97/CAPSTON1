const { insertCartItem, getCartItemsByUserId, deleteCartItem } = require('../Model/cartModel');

// Add item to cart
const addToCart = (req, res) => {
  const data = req.body;
  insertCartItem(data, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while adding the item to the cart.' });
    } else {
      res.json(results);
    }
  });
};

// View user's cart
const viewCart = (req, res) => {
  const userId = req.params.userId;
  getCartItemsByUserId(userId, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while retrieving the cart items.' });
    } else {
      res.json(results);
    }
  });
};

// Remove item from cart
const removeFromCart = (req, res) => {
  const cartItemId = req.params.cartItemId;
  deleteCartItem(cartItemId, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while removing the item from the cart.' });
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