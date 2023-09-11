const db = require("../config/index");
// class Cart {
//     // Get all cart items
//     getItems(req, res) {
//         const query = `
//         SELECT C.product_id, C.quantity, p.product_name, p.price, p.primary_image_url, p.description
//         FROM Cart c
//         JOIN products p ON C.product_id = p.product_id;
//         `;
//         db.query(query, (err, results) => {
//             if (err) {
//                 throw err;
//             } else {
//                 res.json({ status: res.statusCode, results });
//             }
//         });
//     }
    // // Add a product to the cart
    // addItem(req, res) {
    //     const { productID, quantity } = req.body;
    //     const query = `
    //     INSERT INTO Cart (product_id, quantity)
    //     VALUES (?, ?);
    //     `
    //     db.query(query, [productID, quantity], (err) => {
    //         if(err) {
    //             throw err;
    //         } else {
    //             res.json({ status: res.statusCode, msg: "Product added to the cart!" });
    //         }
    //     })
    // }
//     // Remove a product from the cart
//     deleteItem(req, res) {
//         const cartID = req.params.id;
//         const query = `
//         DELETE FROM Cart
//         WHERE cart_id = ?;
//         `
//         db.query(query, [cartID], (err) => {
//             if(err) {
//                 throw err;
//             } else {
//                 res.json({ status: res.statusCode, msg: "Product removed from the cart!" });
//             }
//         })
//     }
//     // Update the quantity of a product in the cart
//     updateItem(req, res) {
//         const cartID = req.params.id;
//         const { quantity } = req.body;
//         const query = `
//         UPDATE Cart
//         SET quantity = ?
//         WHERE cart_id = ?;
//         `
//         db.query(query, [quantity, cartID], (err) => {
//             if(err) {
//                 throw err;
//             } else {
//                 res.json({ status: res.statusCode, msg: "Cart item updated!" });
//             }
//         })
//     }
// }
const insertCartItem = (data, result) => {
    db.query("INSERT INTO Cart (userId, product_id, quantity) VALUES (?, ?, ?)",
        [data.userId, data.product_id, data.quantity],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};
const getCartItemsByProductId = (userId, result) => {
    db.query(
        "SELECT c.product_id, c.quantity, p.product_name, p.price, p.primary_image_url, p.description FROM Cart c JOIN products p ON c.product_id = p.product_id WHERE c.userId = ?",
        [userId], // Retrieve cart items based on userId
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        }
    );
    // db.query("SELECT c.product_id, c.quantity, p.product_name, p.price, p.primary_image_url, p.description FROM Cart c JOIN products p ON c.product_id = p.product_id", [product_id], (err, results) => {
    //     if (err) {
    //         console.log(err);
    //         result(err, null);
    //     } else {
    //         result(null, results);
    //     }
    // });
};
const deleteCartItem = (cart_id, result) => {
    db.query("DELETE FROM Cart WHERE cart_id = ? ", [cart_id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};
module.exports = {getCartItemsByProductId, deleteCartItem, insertCartItem}