const express = require('express');

const router = express.Router();
const {
    addToCart, 
    removeFromCart,
    getCart,
    clearCart, 
    addProduct, 
    removeProduct, 
    getAllProducts, 
    searchProducts, 
    getNewCollections, 
    getPopularInOffice,
    getRelatedProduct,
    UploadIMG,
    getTransactions,
    deleteTransaction, 
} = require('../controller/product-controller.js');
const {checkout} = require('../controller/checkOutController.js')
const fetchUser = require('../middleware/fetchUser.js')
const upload = require('../middleware/UploadImg.js')

// Cart routes
router.post('/addtocart', fetchUser, addToCart);
router.post('/removefromcart', fetchUser, removeFromCart);
router.post('/getcart', fetchUser, getCart )
router.post('/checkout', checkout)
router.post('/clearcart',fetchUser, clearCart)

// Product routes
router.post('/upload', upload.single('produk'), fetchUser, UploadIMG)
router.post('/addproduct',fetchUser, addProduct);
router.delete('/removeproduct', fetchUser, removeProduct);
router.get('/allproducts', getAllProducts);
router.get('/relatedproduct', getRelatedProduct);
router.get('/search', searchProducts);
router.get('/new-collections', getNewCollections);
router.get('/popular-in-office', getPopularInOffice);
router.get('/all-transactions', fetchUser, getTransactions)
router.delete('/remove-transactions', fetchUser, deleteTransaction)

module.exports = router;
