var utilisModule = require('./utilis.js');

fs = require('fs');
fs.readFile('./numbers.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
utilisModule.splitByNewLine(data);
});
