const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  // remove line with error and write your code here

  if (date === undefined) 
    return 'Unable to determine the time of year!';

    if (isNaN(date)) {
      return "Error";
  }

  const month = date.getMonth();
  if(month==11||month==0||month==1){
    return 'winter';
  }
  else if(month>=2&&month<=4){
    return 'spring';
  }
  else if(month>=5&&month<=7){
    return 'summer';
  }
  else{
    return 'autumn';
  }
};
