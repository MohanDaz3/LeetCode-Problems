// 1346. Check If N and Its Double Exist
// link:https://leetcode.com/problems/check-if-n-and-its-double-exist/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j&&arr[i]===2*arr[j]){
                return true
            }
        }
    } 
    return false 
 };

 console.log(checkIfExist([10,2,5,3]));  //true
 console.log(checkIfExist([3,1,7,11]));   //false