// 771. Jewels and Stones
// link:https://leetcode.com/problems/jewels-and-stones/
// You're given strings jewels representing the types of stones that are jewels, 
// and stones representing the stones you have. Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jew=jewels.split("")
    let stns=stones.split("")
    let count=0
   for(let i=0;i<jew.length;i++){
    for(let j=0;j<stns.length;j++){
        if(jew[i]===stns[j]){
            count++
        }
    }
    
   }
   return count
};
console.log(numJewelsInStones("aA","aAAbbbb"));
console.log(numJewelsInStones("z","ZZ"));