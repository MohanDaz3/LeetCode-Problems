// 2413. Smallest Even Multiple
// link:https://leetcode.com/problems/smallest-even-multiple//

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  let i=n
  while(true){
    if(i%n===0&&i%2===0){
        return i
    
    }
    i++
  } 
};
console.log(smallestEvenMultiple(5));  //10
console.log(smallestEvenMultiple(6));  //6