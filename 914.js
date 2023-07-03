// 914. X of a Kind in a Deck of Cards
// link:https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let arr=[]
    let check=1
for(let i=0;i<deck.length-1;i++){
    for(let j=i+1;j<deck.length;j++){
       if(deck[i]===deck[j]&&deck[j!=true]){
        // arr.push(deck[i])
        deck[j]=true
        check++
       }
    }
    if()
}

    
};
 
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])); //true
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])); //false