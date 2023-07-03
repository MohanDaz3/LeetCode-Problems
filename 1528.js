// 1528. Shuffle String
// link:https://leetcode.com/problems/shuffle-string/description/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let len=indices.length
    let newString = new Array(len)

    for(let i=0;i<s.length;i++){
        newString[indices[i]]=s[i]
    }

    return newString.join("")
    
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3])); //leetcode
console.log(restoreString("abc",[0,1,2]));  //abc