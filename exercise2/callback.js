/*jshint esversion: 6 */
const utilisModule = require("./utilis.js");
const fs = require("fs");

const readFileAsArray = (file, cb) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    const numbersArray = utilisModule.splitByNewLine(data);
    //console.log(numbersArray);
    const amountOfOdds = utilisModule.countOdd(numbersArray);
    //console.log(amountOfOdds);

    cb(err, amountOfOdds);
  });
};

readFileAsArray("./numbers.txt", (err, lines) => {
  if (err) throw err;
  console.log(lines);
});
