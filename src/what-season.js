const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  const season = ['winter', 'spring', 'summer', 'autumn']    
  try {
      if(date == undefined){
          return 'Unable to determine the time of year!'
        }
      date.getTime()        
      if (date.getMonth()>1 && date.getMonth()<5){
          return season[1]
      }
      if (date.getMonth()>4 && date.getMonth()<8){
          return season[2]
      }
      if (date.getMonth()>7 && date.getMonth()<11){
          return season[3]
      }
      else {return season[0]}
      }
  catch {      
      throw new Error('Invalid date!')
  }     
}

module.exports = {
  getSeason
};
