const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlProfileCategory = require('../controllers/profilecategory.controller');
const ctrlCelebrityProfile = require('../controllers/celebrityprofile.controller');
const ctrlMovies = require('../controllers/movies.controller');
const ctrlNews = require('../controllers/news.controller');
const ctrlGallery = require('../controllers/gallery.controller');


const jwtHelper = require('../config/jwtHelper');

//User Registration, Login
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

//Celebrity Category
router.post('/createCategory', ctrlProfileCategory.register);
router.get('/getCategories', ctrlProfileCategory.getCategories);
router.get('/getCategory/:id', ctrlProfileCategory.getCategory);
router.put('/updateCategory/:id', ctrlProfileCategory.updateCategory);

//Celebrity Profiles
router.post('/createProfile', ctrlCelebrityProfile.saveData);
router.get('/getProfiles', ctrlCelebrityProfile.getProfiles);
router.get('/getProfile/:id', ctrlCelebrityProfile.getProfile);
router.post('/updateProfile', ctrlCelebrityProfile.updateProfile);

//Movies
router.post('/createMovie', ctrlMovies.saveData);
router.get('/getMovies', ctrlMovies.getMovies);
router.get('/getMovie/:id', ctrlMovies.getMovie);
router.post('/updateMovie', ctrlMovies.updateMovie);

//News
router.post('/createNews', ctrlNews.saveData);
router.get('/getAllNews', ctrlNews.getAllNews);
router.get('/getNews/:id', ctrlNews.getNews);
router.post('/updateNews', ctrlNews.updateNews);

//Gallery
router.post('/createGallery', ctrlGallery.saveData);
router.get('/getAllGallery', ctrlGallery.getAllGallery);
router.get('/getGallery/:id', ctrlGallery.getGallery);
router.post('/updateGallery', ctrlGallery.updateGallery);


module.exports = router;