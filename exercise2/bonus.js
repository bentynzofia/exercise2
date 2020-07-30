
const utilisModule = require("./utilis.js");

const fs = require("fs");
const fsPromises = fs.promises;

async function showFile(file) {
  const content = await fsPromises.readFile(file, "utf-8");
  const numbersArray = utilisModule.splitByNewLine(content.toString());
  const amountOfOdds = utilisModule.countOdd(numbersArray);

  return amountOfOdds;
}


(async () => {
  const lines = await readFileAsArray.showFile("./numbers.txt");
  console.log(lines);
})();
