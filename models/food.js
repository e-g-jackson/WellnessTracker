var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var newFood = new Schema ({
    foodName: {
        type: String,
        required: true
    },
    meal: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

var Food = mongoose.model("Food", newFood);

module.exports = Food;
