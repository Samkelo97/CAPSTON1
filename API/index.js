const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {router, verifyAToken} =  require("./routes/routes.js");
const app = express();
// use express json
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use router
// app.use(Router);
app.use(router);
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
//static
app.use(express.static('./static'))
// Middleware - APplication level
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
  });
  app.use(
    express.static('./static'),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    routes
)
  // Handling all errors
  app.use(ErrorHandling);
  // Server
routes.get('^/$|/challenger',(req, res)=>{
    res.sendFile(path.resolve(__dirname,
        "./static/HTML/index.html"))
})
//Handling all errors using middleware
app.use(ErrorHandling)
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})