const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {}    
  for(let k=0;k<domains.length;k++){
      domains[k] = domains[k].split('.').reverse()
      for(let i=0;i<domains[k].length;i++){            
          isNaN(obj[`.${domains[k].slice(0, i+1).join('.')}`]) ? obj[`.${domains[k].slice(0, i+1).join('.')}`] =1 : obj[`.${domains[k].slice(0, i+1).join('.')}`]+=1
      }
  }
  return obj
}

module.exports = {
  getDNSStats
};
