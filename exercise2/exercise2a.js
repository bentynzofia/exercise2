/*jshint esversion: 6 */
const utilisModule = require('./utilis.js');

fs = require('fs');
fs.readFile('./numbers.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
const numbersArray = utilisModule.splitByNewLine(data);
console.log(numbersArray);
const sumOfOdds = utilisModule.countOdd(numbersArray);
console.log(sumOfOdds);
});
