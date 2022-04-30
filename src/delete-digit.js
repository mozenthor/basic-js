const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  n = n+''
  let arr = n.split('')    
  if(arr[0]<arr[1]){
    arr.splice(0, 1)      
    return Number(arr.join(''))
  }
  for(let i=0; i<arr.length; i++){
    if(arr[i] == 0){
      arr.splice(i, 1)
      return Number(arr.join(''))
  }
    if(arr[i] < arr[i+1] && arr[i]< arr[i-1]){          
      arr.splice(i, 1)
      return Number(arr.join(''))
    }
  }  
}

module.exports = {
  deleteDigit
};
