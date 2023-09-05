const Users = require('./users')
const products = require('./products')
module.exports = {
    users: new Users(),
    products: new products()
}