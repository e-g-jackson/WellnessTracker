var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newRecipe = new Schema({
    userId: mongoose.ObjectId,
    title:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    publisherUrl:{
        type: String,
        required: true
    },
    recipeId:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
});

var Recipe = mongoose.model("Recipe", newRecipe)

module.exports = Recipe;