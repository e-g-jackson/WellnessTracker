var mongoose = require("mongoose");
var Schema = mongoose.Schema
var newWeight = new Schema ({
    weight: {
        type: String, 
        required: true
    },
});
var weight = ("Weight", newWeight);

module.exports = weight;