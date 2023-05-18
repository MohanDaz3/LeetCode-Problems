// 682. Baseball Game
// link:https://leetcode.com/problems/baseball-game/


/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let sum=0
    let record=[]
    for(let i=0;i<operations.length;i++){
        if(operations[i]==='C'){
            record.pop(record[record.length-1])
            console.log(record);
           
        }else if(operations[i]==='D'){
            record.push((record[record.length-1])*2)
            console.log(record);
        }else if(operations[i]==='+'){
            record.push(parseInt(record[record.length-1])+parseInt(record[record.length-2]))
            console.log(record);

        }else{
          record.push(parseInt(operations[i]))
          console.log(record)
        }
    }

 for(let i=0;i<record.length;i++){
  sum=sum+record[i]
 }
 return sum
    
};
console.log(calPoints(["5","2","C","D","+"]));