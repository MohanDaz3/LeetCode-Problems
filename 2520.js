// 2520. Count the Digits That Divide a Number
// link:https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
let count=0
num=String(num)
// console.log(num);
for(let i=0;i<num.length;i++){
    if(num%num[i]===0){
        count++
    }
}
return count                                
    

};
console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));
