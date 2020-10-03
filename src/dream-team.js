const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  // remove line with error and write your code here

  if (!Array.isArray(members)) return false;


  let nameDreamTeam = [];

  for (let player of members) {
    if (typeof (player) !== "string") {
      continue;
    }

    for (let letter of player) {
      if (letter == " ") continue;
      nameDreamTeam.push(letter.toUpperCase());
      break;
    }
}
return nameDreamTeam.sort().join('');
};
