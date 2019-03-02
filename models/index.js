// function Models () {
//     const newUser = require("./newUser.js")
//     const weight = require("./weight.js");
//     const food = require("./food.js");
//     return(newUser, weight, food);
// };
// module.exports = Models();
module.exports = {
    users: require('./newUser'),
    weight: require('./weight'),
    food: require('./food'),
};