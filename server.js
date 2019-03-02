const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var logger = require('morgan');
const cors = require('cors');
// const $ = require('jquery');
// const mongo = require('mongodb');
// const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WellnessTracker";

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger("dev"));
//CORS
const production  = 'https://wellness-tracker-app.herokuapp.com';
const development = 'http://localhost:3000';
var url;

if (process.env.NODE_ENV){
    url = production;
} else {
    url = development;
}
console.log('url = ' + url);
if(process.env.PORT){console.log('process.env.PORT = ' + process.env.PORT)};

// var whitelist = [url, process.env.PORT]
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
var corsOptions = {
    origin: url,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
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