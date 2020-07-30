/*jshint esversion: 6 */
const utilis = {
  splitByNewLine: (fileData) => {
    const lines = fileData.split("\r\n");
    const numbers = lines.map((num) => +num);
    return numbers;
  },
  countOdd: (num) => {
    const oddNumbers = num.filter((num) => num % 2 !== 0);
    return oddNumbers.length;
  },
};

module.exports = utilis;
