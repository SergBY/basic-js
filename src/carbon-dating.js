const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  let sampleActivityCopy = Number(sampleActivity);
  let age = Math.ceil(MODERN_ACTIVITY / sampleActivityCopy) / (0.693 / HALF_LIFE_PERIOD);

  if (typeof sampleActivity !== "string" || sampleActivity === '' || 0 >= sampleActivity || sampleActivity > 15) {
    return false;
  } else {
    return isNaN(age) ? false : age === Infinity ? false : Number(age);
  }
};