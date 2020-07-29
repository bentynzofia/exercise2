/*jshint esversion: 6 */
const utilis = {
  splitByNewLine: (fileData) => {
    let lines = fileData.split("\r\n");
    const numbers = lines.map((num) => +num);
    return numbers;
  },
  countOdd: (num) => {
    let oddsAmount = 0;
    const oddNumbers = num.filter((num) => num % 2 !== 0);
    return oddNumbers.length;
  },
};

module.exports = utilis;
