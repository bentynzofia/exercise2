// jshint esversion:8
const utilisModule = require("./utilis.js");
const fs = require("fs");

async function readFileAsArray(file) {
  try {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        return console.log(err);
      }
      const numbersArray = utilisModule.splitByNewLine(data);
      const amountOfOdds = utilisModule.countOdd(numbersArray);
      //console.log(amountOfOdds);
      return amountOfOdds;
    });
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Done");
  }
}

(async () => {
  const lines = await readFileAsArray("./numbers.txt");
})();
