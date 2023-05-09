// 1394. Find Lucky Integer in an Array
// link:https://leetcode.com/problems/find-lucky-integer-in-an-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
   let total=-1
   for(let i=0;i<arr.length;i++){
    count=1
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]&&arr[i]!==true){
            arr[j]=true
            count++
        }
    }
    if(count===arr[i]&&count>total){
        total=count
    }
   }
   return total

    

};
console.log(findLucky([2,2,3,4]));  //2
console.log(findLucky([1,2,2,3,3,3])); //3
console.log(findLucky([2,2,2,3,3]));  //-1