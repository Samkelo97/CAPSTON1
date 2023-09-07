const { getProducts, getProductById, getProductsByCategory, insertProduct, updateProductById, deleteProductById } = require("../Model/products");
// Get All Products
const showProducts = (req, res) => {
    const searchKeyword = req.query.search;
    getProducts(searchKeyword, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
};
// FIlter Products
const filterProducts = (req, res) => {
    const categoryId = req.params.category_id;
    getProductsByCategory(categoryId, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};
// Get Single Product
const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Create New Product
const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Update Product
const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
// Delete Product
const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
module.exports = {
    showProducts,
    showProductById,
    filterProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
}