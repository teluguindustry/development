require('./config/config');
require('./models/db');
require('./config/passportConfig');

require('./models/profilecategory.model');
require('./models/celebrityprofile.model');
require('./models/movies.model');
require('./models/news.model');
require('./models/gallery.model');
require('./models/nowplaying.model')
require('./models/upcoming.model')
require('./models/reviews.model')
require('./models/pramotions.model')

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express();

//middleware
//cors
app.use(cors());
app.use(passport.initialize());

//bodyparser
app.use(bodyparser.json());

app.use('/api', rtsIndex);

app.use('/uploads', express.static('uploads'));

//error handler
app.use((err, req, res, next) => {
    if(err.name === 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }else{
        console.log(err);
    }
});

//start server
app.listen(process.env.PORT, ()=>console.log(`server started at port: ${process.env.PORT}`));