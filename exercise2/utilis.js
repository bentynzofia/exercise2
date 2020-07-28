/*jshint esversion: 6 */
const utilis = {
  splitByNewLine: (fileData) => {
    lines = fileData.split("\r\n");
    numbers = lines.map((num) => Number(num));
    return numbers;
  },
  countOdd: (num) => {
    const oddNumbers = num.filter((num) => num % 2 !== 0);
    const oddSum = oddNumbers.reduce((a, b) => a + b);
    return oddSum;
  },
};

module.exports = utilis;
