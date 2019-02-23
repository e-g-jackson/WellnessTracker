// const $ = require('jquery');
const express = require('express');
const path = require('path');
const mongo = require('mongodb');
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

const dbRoute = require(path.join(__dirname, "./models/book.js"));

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})