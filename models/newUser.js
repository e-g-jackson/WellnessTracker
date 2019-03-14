var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newUserSchema = new Schema({
    id: mongoose.ObjectId,
    username: {
        type: String,
        index:{
            unique:true,
            dropDups:true
        },
        required: true
    },
    password: {
        type: String,
        required: true
    },
    foodLog:{
        type: Schema.Types.ObjectId,
        ref: "Food",
    },
    weightLog:{
        type: Schema.Types.ObjectId,
        ref: "Weight",
    },
    recipeLog:{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }
})

var User = mongoose.model("User", newUserSchema);

module.exports = User;