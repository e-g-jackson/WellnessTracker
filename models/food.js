var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var newFood = new Schema ({
    foodName: {
        type: String,
        required: false
    },
    meal: {
        type: String,
        required: false
    },
    foodType: {
        type: String,
        required: false
    }
},{
    timestamps:true
})

var Food = mongoose.model("Food", newFood);

module.exports = Food;
