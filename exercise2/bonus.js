//jshint esversion: 8
const utilisModule = require("./utilis.js");

const fs = require("fs");
const fsPromises = fs.promises;

async function showFile(file) {
  const content = await fsPromises.readFile(file, "utf-8");
  const numbersArray = utilisModule.splitByNewLine(content.toString());
  const amountOfOdds = utilisModule.countOdd(numbersArray);

  console.log(numbersArray);
  console.log(amountOfOdds);

  return amountOfOdds;
}

showFile("./numbers.txt");
