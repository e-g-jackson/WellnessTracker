const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var logger = require('morgan');

const app = express();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WellnessTracker";

//we need the .env file that has the mlab info so that we're all working on the same database
//process.env.NODE_ENV === 'production' ? '  mongodb://Leah5.mlab.com:39705/buago ' : 'mongodb://localhost/buychicago';
//heroku will need to be setup a bit differently

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger("dev"));

mongoose.connect(MONGODB_URI);

const db = require(path.join(__dirname, "./models/"));

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require('./routes/dataRoutes')(app, db);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})