const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let addition =[]
  let array = []
  if(options.additionRepeatTimes == undefined){
    if(options.addition != undefined){
      addition.push(options.addition+'')
  } 
  }
  else{
      for(let i=1; i<=options.additionRepeatTimes;i++){
          addition.push(options.addition+'')
      }
  }
  if(options.repeatTimes == undefined){
      if(options.additionSeparator == undefined){
          array.push(str+addition.join('|'))
        }
        else{
          array.push(str+addition.join(options.additionSeparator))
        }   
  }
  else {
      for(let k=1; k<=options.repeatTimes; k++){
          if(options.additionSeparator == undefined){
            array.push(str+addition.join('|'))
          }
          else{
            array.push(str+addition.join(options.additionSeparator))
          }      
        }
  }    
  if(options.separator == undefined){
    return array.join('+')
  }
  return array.join(options.separator)  
}

module.exports = {
  repeater
};
