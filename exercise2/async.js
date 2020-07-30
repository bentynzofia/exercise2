
const utilisModule = require("./utilis.js");
const fs = require("fs");

async function readFileAsArray(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", function (err, data) {
      if (err) {
        return reject(err);
      }
      const numbersArray = utilisModule.splitByNewLine(data);

      resolve(numbersArray);
    });
  });
}

(async () => {
  const lines = await readFileAsArray("./numbers.txt");
  console.log(lines);
})();
