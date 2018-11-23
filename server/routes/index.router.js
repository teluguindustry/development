const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlProfileCategory = require('../controllers/profilecategory.controller');


const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/createCategory', ctrlProfileCategory.register);
router.get('/getCategories', ctrlProfileCategory.getCategories);
router.get('/getCategory/:id', ctrlProfileCategory.getCategory);
router.put('/updateCategory/:id', ctrlProfileCategory.updateCategory);


module.exports = router;