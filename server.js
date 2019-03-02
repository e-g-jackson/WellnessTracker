const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var logger = require('morgan');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WellnessTracker";

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