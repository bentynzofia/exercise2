/*jshint esversion: 6 */
const utilis = {
  splitByNewLine: (fileData) => {
    lines = fileData.split("\r\n");
    numbers = lines.map((num) => Number(num));
    return numbers;
  },
  countOdd: (num) => {
    let oddsAmount = 0;
    const oddNumbers = num.filter((num) => num % 2 !== 0);
    return oddNumbers.length;
  },
};

module.exports = utilis;
