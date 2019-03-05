var mongoose = require("mongoose");

var Schema = mongoose.Schema

var newWeight = new Schema ({
    weight: {
        type: Number, 
        required: false
    }
},{
    timestamps: true
});

var Weight = mongoose.model("Weight", newWeight);

module.exports = Weight;