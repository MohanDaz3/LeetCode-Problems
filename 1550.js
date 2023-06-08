// 1550. Three Consecutive Odds
// link:https://leetcode.com/problems/three-consecutive-odds/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===1){
            count++
            
        }else{
            count=0
        }
        if(count===3){
            return true
        }
       
    }

        return false

    



};
console.log(threeConsecutiveOdds([2,6,4,1]));  //false
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));  //true
console.log(threeConsecutiveOdds([1,1,1]));  //true