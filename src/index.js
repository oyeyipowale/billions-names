let billionsNames = require("./billions-names.json");
let uniqueRandomArray = require("unique-random-array");
let getRandomItem = uniqueRandomArray(billionsNames);

// package.json husky settings
// "pre-push": "npm run test:single"

module.exports = {
  all: billionsNames,
  random: random
};

function random(number) {
  console.log(number);
  if (number === undefined) {
    return getRandomItem();
  } else {
    console.log(number);
    let randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
