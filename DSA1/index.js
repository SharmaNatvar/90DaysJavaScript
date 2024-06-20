const words_array = require('./data.json')

let findData = function (item) {
  for (let i = 0; i <= words_array.length/2; i++) {
    if (words_array[i] == item) {
      return words_array[i];
    }
  }

  for (let j = Math.round(words_array.length/2); j <= words_array.length; j++) {
    if (words_array[j] == item) {
      return words_array[j];
    }
  }
};

const result = findData("nopales");
console.log("result->",result)

