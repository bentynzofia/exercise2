/*jshint esversion: 6 */
const utilisModule = require("./utilis.js");
fs = require("fs");

const readFileAsArray = (file, cb) => {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    const numbersArray = utilisModule.splitByNewLine(data);
    console.log(numbersArray);
    const amountOfOdds = utilisModule.countOdd(numbersArray);
    console.log(amountOfOdds);
  });
};

readFileAsArray("./numbers.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
  return data;
});
