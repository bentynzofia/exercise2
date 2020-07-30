const utilisModule = require("./utilis.js");
const fs = require("fs");

const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", function (err, data) {
      if (err) {
        return reject(err);
      }
      const numbersArray = utilisModule.splitByNewLine(data);

      resolve(numbersArray);
    });
  });
};

readFileAsArray("./numbers.txt")
  .then((numbersArray) => {
    return utilisModule.countOdd(numbersArray);
  })
  .catch(console.log(err));
