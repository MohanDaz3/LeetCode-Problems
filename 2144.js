// Maximum Number of Words Found in Sentences
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maximum=0
    let temp=0
    for(let i=0;i<sentences.length;i++){
        temp=sentences[i].split(" ").length
        if(temp>maximum){
            maximum=temp
        }
    }
    return maximum
    
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));