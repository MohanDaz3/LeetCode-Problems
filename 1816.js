// Truncate Sentence

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr=s.split(" ")
    s1=""
    for(let i=0;i<arr.length;i++){
        if(i<k){
          s1 +=`${arr[i]} `
        }
    }
    return s1.trim()


    
};

console.log(truncateSentence("Hello how are you Contestant", 4));