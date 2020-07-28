/*jshint esversion: 6 */
const utilisModule = require("./utilis.js");
fs = require("fs");

const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", function (err, data) {
      if (err) {
        reject(console.log(err));
      }
      const numbersArray = utilisModule.splitByNewLine(data);
      console.log(numbersArray);
      const amountOfOdds = utilisModule.countOdd(numbersArray);
      console.log(amountOfOdds);
      resolve(amountOfOdds);
    });
  });
};
