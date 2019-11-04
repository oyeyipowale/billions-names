let billionsNames = require("./billions-names.json");
let uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: billionsNames,
  random: uniqueRandomArray(billionsNames)
};
