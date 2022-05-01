const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
   constructor(machine){
     this.machine = machine
   }
  encrypt(m,k) {
      if(m ==  undefined || k == undefined) throw new Error(`Incorrect arguments!`)
      let arrsymb = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
      let wrongsymb = 0
      let res = ''
      m = m.toUpperCase()
      k = k.padEnd(m.length, k).toUpperCase()        
      for(let i=0;i<m.length;i++){
          let index = arrsymb.indexOf(m[i])+arrsymb.indexOf(k[i+wrongsymb])
          if(!arrsymb.includes(m[i])){
              wrongsymb--
              res+=m[i]
          }
          else{
              if(index>25){
                  index-=26
              }
              res+=arrsymb[index]
          }
      }
      return this.machine === false ? res.split('').reverse().join('') : res
  }
  decrypt(s,k) {
      if(s ==  undefined || k == undefined) throw new Error(`Incorrect arguments!`)
      let arrsymb = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
      let wrongsymb = 0
      let res = ''
      s = s.toUpperCase()
      k = k.padEnd(s.length, k).toUpperCase()
      for(let i=0;i<s.length;i++){
          let index = arrsymb.indexOf(s[i])-arrsymb.indexOf(k[i+wrongsymb])
          if(!arrsymb.includes(s[i])){
              wrongsymb--
              res+=s[i]
          }
          else{
              if(index<0){
                  index+=26
              }
              res+=arrsymb[index]
          }
      }
      return this.machine === false ? res.split('').reverse().join('') : res 
  }
}

module.exports = {
  VigenereCipheringMachine
};
