/*const express = require("express");
const router = express.Router();

const { getAllproducts, getProductById } = require('../controller/productControllers');

//@desc GET all products from MongoD
//@route GET/api/products
//@access Public
router.get('/', getAllproducts)

//@desc GET a product by Id from MongoD
//@route GET/api/products/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router;*/


const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;