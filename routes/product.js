/************ Require's ************/
const express = require('express');
const router = express.Router();

/************ Controller Require ************/
const productController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create); 
router.post('/create', productController.store); 

/*** EDIT ONE PRODUCT*/
router.get('/edit/:id', productController.edit); 
router.post('/edit/:id', productController.update);

/*** DELETE ONE PRODUCT */
router.get('/destroy/:id', productController.destroy);

/*** LIST PRODUCT */
router.get("/list", productController.list);

module.exports = router;