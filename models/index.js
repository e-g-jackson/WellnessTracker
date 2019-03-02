function Models () {
    const weight = require("./weight.js");
    const food = require("./food.js");
    return(weight, food);
};

module.exports = Models();