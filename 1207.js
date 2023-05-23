// 1207. Unique Number of Occurrences
// link:https://leetcode.com/problems/unique-number-of-occurrences/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var map1 = new Map()
    for(i=0;i<arr.length;i++) {
        if(!map1.has(arr[i])) {
            map1.set(arr[i],1)
        } else {
            value = map1.get(arr[i])
            value++
            map1.set(arr[i], value)
        }
    }
    var set1 = new Set(map1.values())
    return map1.size==set1.size?true:false
};
console.log(uniqueOccurrences([1,2,2,1,1,3])); //true
console.log(uniqueOccurrences([1,2])); //false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])); //true