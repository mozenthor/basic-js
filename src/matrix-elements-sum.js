const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let res = 0
  for(item of matrix[0]){
      res+=item
  }    
  for(let i=1;i<matrix.length;i++){
    for(let k=0;k<matrix[i].length;k++){
      if(matrix[i-1][k] != 0 && matrix[i-1][k] != undefined){
        res+=matrix[i][k]
      }
    }
  }
  return res
}

module.exports = {
  getMatrixElementsSum
};
