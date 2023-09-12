const db = require("../config");
const bcrypt = require("bcrypt"); // Import bcrypt library
const { createToken } = require("../Middleware/authentication");

class Users {
  // ... Other methods ...

  async register(req, res) {
    const data = req.body;
    // Encrypt password
    const saltRounds = 15; // Define the number of salt rounds
    try {
      const hashedPassword = await bcrypt.hash(data.userPass, saltRounds);

      // Create a user object for token generation
      const user = {
        emailAdd: data.emailAdd,
        userPass: hashedPassword, // Store the hashed password
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
    } catch (error) {
      console.error("Error hashing password:", error);
      res.json({
        status: res.statusCode,
        msg: "Error hashing password",
      });
    }
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
          const passwordMatch = await bcrypt.compare(userPass, storedHashedPassword);

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

  // ... Other methods ...
}

module.exports = Users;
