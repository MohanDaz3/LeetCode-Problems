// 1716. Calculate Money in Leetcode Bank
// link:https://leetcode.com/problems/calculate-money-in-leetcode-bank/

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
let total=0
let k=0
let count=1
let num=1
for (let i=1;i<=n;i++){
    total+=k+count
    count++

    if(i%7==0){
        k=num++
        count=1
    }
}
return total

};
console.log(totalMoney(4));  //10
console.log(totalMoney(10)); //37
console.log(totalMoney(20)); //96