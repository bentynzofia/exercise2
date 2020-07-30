/*jshint esversion: 6 */
const utilisModule = require("./utilis.js");
const fs = require("fs");

const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", function (err, data) {
      if (err) {
        reject(err);
      }
      const numbersArray = utilisModule.splitByNewLine(data);
      //console.log(numbersArray);

      resolve(numbersArray);
    });
  });
};

readFileAsArray("./numbers.txt")
  .then((numbersArray) => {
    console.log(utilisModule.countOdd(numbersArray));
  })
  .catch();
