const db = require("../config") //this imprt the db con from config
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../Middleware/authentication')
class Users{
    fetchUsers(req, res){
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole,
        emailAdd, userProfile
        FROM Users;
        `
        db.query(query,(err, results)=>{
            if(err)throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole,
        emailAdd,userProfile
        FROM Users
        WHERE userId = ${req.params.id};
        `
        db.query(query,
            (err, result)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    async register(req, res) {
      const data = req.body;

      if (!data.userPass) {
        return res.json({ status: res.statusCode, msg: "Password is required." });
      }
    
    // Encrypt password
    data.userPass = await hash(data.userPass, 15);
      
      const user = {
        emailAdd: data.emailAdd,
        userPass: data.userPass
      };
      
      //query
      const query = `
        INSERT INTO Users
        SET ?; 
        `
      db.query(query, [data], (err) => {
        if (err) throw err;
        //create a token
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          msg: "You are now registered.",
        })
      })
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const query = `
      SELECT userID, firstName, lastName,
      gender, userAge, userRole, emailAdd, userPass,
      userProfile
      FROM Users
      WHERE emailAdd = '${emailAdd}';
    `;
    db.query(query, async (err, result) => {
      if (err) {
        console.error("Error fetching user data:", err);
        return res.status(500).json({
          status: 500,
          msg: "An error occurred while fetching user data."
        });
      }
  
      if (!result?.length) {
        console.log("User not found for email:", emailAdd);
        return res.json({
          status: res.statusCode,
          msg: "You provided a wrong email."
        });
      } else {
        try {
          const passwordMatch = await compare(userPass, result[0].userPass);
          
          if (passwordMatch) {
            const token = createToken({
              emailAdd,
              userPass
            });
            res.json({
              msg: "Logged in",
              token,
              result: result[0]
            });
          } else {
            console.log("Password mismatch for email:", emailAdd);
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you have not registered"
            });
          }
        } catch (error) {
          console.error("Error comparing passwords:", error);
          res.status(500).json({
            status: 500,
            msg: "An error occurred while comparing passwords."
          });
        }
      }
    });
  }
    updateUser(req, res){
        const data = req.body
        if (data.userPass){
            data.userPass =
            hashSync(data.userPass, 15)
        }
        const query =`
        UPDATE User
        SET ?
        WHERE userID = ?
        `
        db.query(query,
            [req.body, req.params.id],
            
            (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The user record was updated."
                })
            })
    }
    deleteUser(req, res){
        const query = ` DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user recored was deleted."
            })
        })
    }
}
module.exports = Users