const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  const allTurns = 2 ** disksNumber - 1;
  const turnsPerSec = turnsSpeed / 3600;

  return {
    turns: allTurns,
    seconds: parseInt(allTurns / turnsPerSec),
  };
};
