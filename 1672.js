/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let nums=0
    for(let i=0;i<accounts.length;i++){
        let num =0
        let arr=accounts[i]
        for(let j=0;j<arr.length;j++){
             num+= arr[j]
        }
        if(nums<num){
            nums=num
        }
    }
    return nums
};
console.log( maximumWealth([[1,5],[7,3],[3,5]]))