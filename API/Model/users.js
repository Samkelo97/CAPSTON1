const db = require("../config");
const { hash, compare } = require("bcrypt");
const { createToken } = require("../Middleware/authentication");

class Users {
  fetchUsers(req, res) {
    const query = `
      SELECT userID, firstName, lastName, userAge, Gender, userRole,
      emailAdd, userProfile
      FROM Users;
    `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchUser(req, res) {
    const query = `
      SELECT userID, firstName, lastName, userAge, Gender, userRole,
      emailAdd, userProfile
      FROM Users
      WHERE userID = ${req.params.id};
    `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass = await hash(data.userPass, 15);

    // Create a user object for token generation
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };

    // SQL query to insert user data
    const query = `
      INSERT INTO Users
      SET ?;
    `;

    db.query(query, [data], (err) => {
      if (err) throw err;

      // Create a token
      const token = createToken(user);

      res.json({
        status: res.statusCode,
        msg: "You are now registered.",
        token,
      });
    });
  }

  async login(req, res) {
    const { emailAdd, userPass } = req.body;

    const query = `
      SELECT userID, firstName, lastName, userAge, Gender, userRole,
      emailAdd, userProfile, userPass
      FROM Users
      WHERE emailAdd = ?;
    `;

    db.query(query, [emailAdd], async (err, result) => {
      if (err) throw err;

      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email.",
        });
      } else {
        const storedHashedPassword = result[0].userPass;
        try {
          const passwordMatch = await compare(userPass, storedHashedPassword);

          if (passwordMatch) {
            // Create a token
            const token = createToken({
              emailAdd,
              userPass,
            });

            res.json({
              msg: "Logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you have not registered",
            });
          }
        } catch (error) {
          console.error("Error comparing passwords:", error);
          res.json({
            status: res.statusCode,
            msg: "Error comparing passwords",
          });
        }
      }
    });
  }

  updateUser(req, res) {
    const data = req.body;
    if (data.userPass) {
      data.userPass = hashSync(data.userPass, 15);
    }
    const query = `
      UPDATE Users
      SET ?
      WHERE userID = ?
    `;
    db.query(
      query,
      [data, req.params.id],
      (err) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: "The user record was updated.",
        });
      }
    );
  }

  deleteUser(req, res) {
    const query = `
      DELETE FROM Users
      WHERE userID = ${req.params.id};
    `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A user record was deleted.",
      });
    });
  }

  // Other methods...

  // You can add more methods like fetchProducts, addProduct, etc.
}

module.exports = Users;
