// 2582. Pass the Pillow
// link:https://leetcode.com/problems/pass-the-pillow/

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let person=1
    count = 1
    for(let i=1;i<=time;i++){
        if(count==1){
            person=person+1
            if(person==n){
                count = -1
            }
        }else{
            person=person-1
            if(person==1){
                count=1
            }
        }
    }
    return person

};
console.log(passThePillow(4,5));  //2
console.log(passThePillow(3,2));  //3