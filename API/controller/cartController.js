const db = require("../config/index");
const getCart = (result) => {
  db.query(
    // "SELECT Cart.cartID, Cart.userID, Cart.quantity, Products.prodPRICE,  Products.prodNAME, Products.prodDESC, Products.prodCAT, Products.prodTYPE " +
    // "FROM Cart " +
    // "INNER JOIN Products ON Cart.prodID = Products.prodID",
    // "SELECT Cart.cartID, Cart.userID, Cart.quantity, Products.prodPRICE,  Products.prodNAME, Products.prodDESC, Products.prodCAT, Products.prodTYPE " +
    // "FROM Cart " +
    // "INNER JOIN Products ON Cart.prodID = Products.prodID",
    "SELECT c.cartID, c.quantity, p.quantity, p.prodName, p.amount, s.userID " +
      "FROM Cart c " +
      "INNER JOIN Products p ON c.prodID = p.prodID " +
      "INNER JOIN Users s ON c.userID = s.userID",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
(err, results) => {
  if (err) {
    console.log(err);
    results(err, null);
  } else {
    results(null, results);
  }
};
const getCartById = (id, result) => {
  db.query("SELECT * FROM Cart WHERE prodID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};
const insertCart = (data, result) => {
  db.query("INSERT INTO Cart SET ?;", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
// const insertCart = (data, result) => {
//   db.query("INSERT INTO Cart SET ?", [data], (err, results) => {
//     if (err) {
//       console.log(err);
//       result(err, null);
//     } else {
//       result(null, results);
//     }
//   });
// };
// const updateCartById = (data, id, result) => {
//   db.query(
//     "UPDATE Cart SET quantity = ? WHERE cartID = ?",
//     [data.quantity, id],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results);
//       }
//     }
//   );
// };
const updateCartById = (data, id, result) => {
  db.query(
    "UPDATE Cart SET prodQUANTITY = ?, prodIMG = ? WHERE cartID = ?",
    [data.quantity, data.prodIMG, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
const deleteCartById = (id, result) => {
  db.query("DELETE FROM Cart WHERE cartID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
module.exports = {
  getCart,
  getCartById,
  insertCart,
  updateCartById,
  deleteCartById,
};
// const { insertCart, updateCartById, deleteCartById } = require("../models/Cart");
// Get All in Cart
const showCart = (req, res) => {
    getCart((err, results) => {
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
// // Create New Cart
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
    deleteCart,
}



// 
