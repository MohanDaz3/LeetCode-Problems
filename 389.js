// 389. Find the Difference
// link:https://leetcode.com/problems/find-the-difference/


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let word1=s.split("")
    console.log(word1);
    let word2=t.split("")
    console.log(word2);
    if(word1.length!==word2.length){
        return word2[word2.length-1]
    }
  
    

};
console.log(findTheDifference( "abcd","abcde"));
console.log(findTheDifference("","y"));