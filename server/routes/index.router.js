const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlProfileCategory = require('../controllers/profilecategory.controller');
const ctrlCelebrityProfile = require('../controllers/celebrityprofile.controller');
const ctrlMovies = require('../controllers/movies.controller');
const ctrlNews = require('../controllers/news.controller');
const ctrlGallery = require('../controllers/gallery.controller');
const ctrlNowPlaying = require('../controllers/nowplayingmovies.controller');
const ctrlUpcoming = require('../controllers/upcomingmovies.controller');
const ctrlMovieReview = require('../controllers/moviereview.controller');
const ctrlPramotions = require('../controllers/pramotions.controller');


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
router.get('/getMovieDetails/:id', ctrlMovies.getMovieDetails);
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

//Now playing
router.post('/createNowPlaying', ctrlNowPlaying.saveData);
router.get('/getAllNowPlaying', ctrlNowPlaying.getAllNowPlaying);
router.get('/getNowPlaying/:id', ctrlNowPlaying.getNowPlaying);
router.post('/updateNowPlaying', ctrlNowPlaying.updateNowPlaying);

//Upcoming movies
router.post('/createUpcoming', ctrlUpcoming.saveData);
router.get('/getAllUpcoming', ctrlUpcoming.getAllUpComing);
router.get('/getUpComing/:id', ctrlUpcoming.getUpComing);
router.post('/updateUpComing', ctrlUpcoming.updateUpComing);

//Movie Reviews
router.post('/createMovieReview', ctrlMovieReview.saveData);
router.get('/getAllMovieReviews', ctrlMovieReview.getAllMovieReviews);
router.get('/getMovieReview/:id', ctrlMovieReview.getMovieReview);
router.post('/updateMovieReview', ctrlMovieReview.updateMovieReview);

//Pramotions
router.post('/createPramotion', ctrlPramotions.saveData);
router.get('/getAllPramotion', ctrlPramotions.getAllPramotions);
router.get('/getPramotion/:id', ctrlPramotions.getPramotion);
router.post('/updatePramotion', ctrlPramotions.updatePramotions);

module.exports = router;