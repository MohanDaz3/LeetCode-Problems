// 1071. Greatest Common Divisor of Strings
// link:https://leetcode.com/problems/greatest-common-divisor-of-strings/


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
     let str=""
     if(str1+str2!==str2+str1){
        return ""
    }
for(let i=0;i<str1.length;i++){
   
    if(str1[i]==str2[i]&&i<str2.length){

    }else{
        str+=str1[i]
    }
}
return str

};
console.log(gcdOfStrings("ABCABC","ABC")) //"ABC"
console.log(gcdOfStrings("ABABA","ABAB")) //"AB"
console.log(gcdOfStrings("LEET","CODE")) //""
