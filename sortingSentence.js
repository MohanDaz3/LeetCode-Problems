// 1859.Sorting the sentence
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let array=s.split(" ")
    let array1=[]
    let answer=" "
    for(let i=0;i<array.length;i++){
        let temp=array[i].slice(-1)[0]
        array1[temp-1]=array[i].slice(-(array[i].length),-1)
        answer=array1.join(' ')
    }
    return answer
};

console.log(sortSentence("is2 sentence4 This1 a3"));