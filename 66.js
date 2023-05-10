// 66. Plus One
// link:https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     let text=''
     let rslt=[]
     for(let i=0;i<digits.length;i++){
        text+=digits[i]
     }
    
     text=BigInt(text)+ BigInt(1)
    
     text=String(text)
     for(let i=0;i<text.length;i++){
        rslt[i]=BigInt(text[i])
     }
     return rslt
    
};
console.log(plusOne([1,2,3]));