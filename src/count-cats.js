const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  
  // remove line with error and write your code here

  let num = 0;
  for (let i = 0; i < backyard.length; i++) {
      for (let j = 0; j < backyard[i].length; j++) {
          if (backyard[i][j] === '^^') {
              num++;
          }
      }
  }
  return num;
};
