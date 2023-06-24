// 744. Find Smallest Letter Greater Than Target
// link:https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let i=0;i<letters.length;i++){
        if(letters[i]>target){
            return letters[i]
        }
    }
  return letters[0]

};
console.log(nextGreatestLetter(["c","f","j"],"a"));  //c
console.log(nextGreatestLetter(["c","f","j"],"c"));  //f
console.log(nextGreatestLetter(["x","x","y","y"],"z")); //x