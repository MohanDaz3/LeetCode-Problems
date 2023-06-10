// 242. Valid Anagram
// link:https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return Boolean(s.split('').sort().join()==t.split('').sort().join())
};

console.log(isAnagram("anagram", "nagaram"));  //true
console.log(isAnagram("rat","car"));   //false