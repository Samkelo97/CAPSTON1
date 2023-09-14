const db = require("../config/index");
// const getCart = (userID, result) => {
//   db.query(
//     "SELECT c.cartID, c.quantity, p.prodQUANTITY, p.prodIMG, p.prodNAME, p.prodPRICE, s.userID " +
//       "FROM Cart c " +
//       "INNER JOIN Products p ON c.prodID = p.prodID " +
//       "INNER JOIN Users s ON c.userID = s.userID " +
//       "WHERE c.userID = ?",
//     [userID],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//         console.log("Error executing SQL query:", err);
//       } else {
//         result(null, results);
//       }
//     }
//   );
// };
const getCart = (userID, result) => {
    db.query(
      "SELECT c.cartID, c.quantity, p.quantity, p.prodUrl, p.prodName, p.amount, s.userID " +
        "FROM Cart c " +
        "INNER JOIN Products p ON c.prodID = p.prodID " +
        "INNER JOIN Users s ON c.userID = s.userID " +
        "WHERE c.userID = ?",
      [userID],
      (err, results) => {
        if (err) {
          console.log("Error executing SQL query:", err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };
const getCartById = (id, result) => {
  db.query("SELECT * FROM Cart WHERE cartID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};
const insertCart = (data, result) => {
  db.query("INSERT INTO Cart SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
const updateCartById = (data, id, result) => {
  db.query(
    "UPDATE Cart SET prodquantity = ?, prodUrl = ? WHERE cartID = ?",
    [data.prodQUANTITY, data.prodIMG, id],
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