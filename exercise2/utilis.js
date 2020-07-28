/*jshint esversion: 6 */
let utilis = {
  splitByNewLine: fileData => {
  lines = fileData.split("\n");
  return lines;
},
  countOdd: x => {
  let oddsSum = 0;
  if(x%2!==0){
    oddsSum += x;
  }
  return oddsSum;
}
};

module.exports = utilis;
