// 58. Length of Last Word

// link:https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    str=s.trim().split(" ")
    console.log(str.length);
    console.log(str);
    for(let i=0;i<str.length;i++){
        return str[str.length-1].length
    }
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));