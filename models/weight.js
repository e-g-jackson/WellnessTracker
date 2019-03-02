var mongoose = require("mongoose");

var Schema = mongoose.Schema

var newWeight = new Schema ({
    weight: {
        type: String, 
        required: false
    }
},{
    timestamps: true
});

var Weight = ("Weight", newWeight);

module.exports = Weight;