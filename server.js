// const $ = require('jquery');
const express = require('express');
const path = require('path');
// const mongo = require('mongodb');
const mongoose = require('mongoose');
var logger = require('morgan');
// const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WellnessTracker";

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger("dev"));

mongoose.connect(MONGODB_URI);

const db = require(path.join(__dirname, "./models/"));

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.post('/db/food', (req, res) => {
    // dbRoute.create(req.body).then(() =>{
    //     res.send("Book Saved!")
    // }).catch(err => {throw err;})
    console.log(req.body)
})
require('./routes/htmlRoutes')(app);
require('./routes/dataRoutes')(app, db);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})