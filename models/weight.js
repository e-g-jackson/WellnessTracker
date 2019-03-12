var mongoose = require("mongoose");

var Schema = mongoose.Schema

var newWeight = new Schema ({
    weight: {
        type: Number, 
        required: true
    },
    userId:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

var Weight = mongoose.model("Weight", newWeight);

module.exports = Weight;