// 392. Is Subsequence
// link:https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let len=s.length
  let count=0
  let j=0
  for(let i=0;i<t.length;i++){
    if(t[i]==s[j]){
        count++
        j++
    }
  }
  if(count==len){
    return true
  }
  return false

    
};

console.log(isSubsequence("abc","ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("","ahbgdc"));