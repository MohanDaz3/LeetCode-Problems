// 2506. Count Pairs Of Similar Strings
// link:https://leetcode.com/problems/count-pairs-of-similar-strings/


/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
 let count=0
 let newAraay=words.map(w=>[...new Set(w)].sort().join())

//  console.log(newAraay);
 for(let i=0;i<words.length;i++){
    for(let j=i+1;j<words.length;j++){
        if(newAraay[i]===newAraay[j]){
            count++
        }
    }
 }
  return count

};
console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]));  //2
console.log(similarPairs(["aabb","ab","ba"]));  //3
console.log(similarPairs(["nba","cba","dba"]));  //0