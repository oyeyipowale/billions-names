let billionsNames = require("./billions-names.json");
let uniqueRandomArray = require("unique-random-array");
let getRandomItem = uniqueRandomArray(billionsNames);

module.exports = {
  all: billionsNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    let randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
