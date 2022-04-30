const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let res = []
  for(let l=0;l<matrix.length;l++){
      res.push([])
    for(let p=0;p<matrix[l].length;p++){
      res[l].push(0)
    }
  }    
  for(let i=0;i<matrix.length;i++){
    for(let k=0;k<matrix[i].length;k++){          
      if(matrix[i][k] == true){
        if(i!=0 && k!=0){res[i-1][k-1]+=1}
        if(i!=0){res[i-1][k]+=1}
        if(i!=0 && k+1<matrix[i].length){res[i-1][k+1]+=1}
        if(k!=0){res[i][k-1]+=1}
        if(k+1<matrix[i].length){res[i][k+1]+=1}
        if(i+1<matrix.length && k!=0){res[i+1][k-1]+=1}
        if(i+1<matrix.length){res[i+1][k]+=1}
        if(i+1<matrix.length && k+1<matrix[i].length){res[i+1][k+1]+=1}
      }
    }
  }
  return res
}

module.exports = {
  minesweeper
};
