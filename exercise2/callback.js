const utilisModule = require("./utilis.js");
const fs = require("fs");

const readFileAsArray = (file, cb) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      return cb(err);
    }
    const numbersArray = utilisModule.splitByNewLine(data);
    const amountOfOdds = utilisModule.countOdd(numbersArray);

    cb(undefined, amountOfOdds);
  });
};

readFileAsArray("./numbers.txt", (err, lines) => {
  if (err) throw err;
  console.log(lines);
});
