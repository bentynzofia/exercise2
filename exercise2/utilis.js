/*jshint esversion: 6 */
const utilis = {
  splitByNewLine: fileData => {
  lines = fileData.split('\n');
  console.log(lines);
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
