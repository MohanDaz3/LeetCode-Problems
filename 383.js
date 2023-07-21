// 383. Ransom Note
// link:https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let string1=ransomNote.split('').sort()
    let string2=magazine.split('').sort()
    let count=0
    let k=0
    for(let i=0;i<string2.length;i++){
        if(string1[k]===string2[i]){
            k++
            count++
        }
    }
    if(count===string1.length){
        return true
    }
    return false;
    
};
console.log(canConstruct("aa","aab")); //true