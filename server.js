// const $ = require('jquery');
const express = require('express');
const path = require('path');
// const mongo = require('mongodb');
const mongoose = require('mongoose');
var logger = require('morgan');
// const axios = require('axios');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WellnessTracker";

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger("dev"));
//CORS
var whitelist = ['https://wellness-tracker-app.herokuapp.com/', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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