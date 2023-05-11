// 434. Number of Segments in a String
// link:https://leetcode.com/problems/number-of-segments-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
   
        let text=s.split(' ')
        let count=0
        for(let i=0;i<text.length;i++){
           
            if(text[i]!==''){
                count++
            }
        }
       return count
   
    

};
console.log(countSegments("Hello, my name is John")); //5
console.log(countSegments("                "));  //0
console.log(countSegments("Hello"));  //1 