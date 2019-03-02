var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newUserSchema = new Schema({
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
    }
})

var User = mongoose.model("User", newUserSchema);

module.exports = User;