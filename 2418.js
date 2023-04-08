// Sort the People

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

 /**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(let i=0;i<names.length-1;i++){
        for(let j=i+1;j<heights.length;j++){
            if(heights[i]<heights[j]){
                // let temp=heights[i]
                // heights[i]=heights[j]
                // heights[j]=temp
                [heights[i],heights[j]]=[heights[j],heights[i]]
            let temps=names[i]
            names[i]=names[j]
            names[j]=temps
            // [names[i],names[j]]=[names[j],names[i]]
        }
    }
    
}
return names
   

};
console.log(sortPeople(["Mary","John","Emma"], heights = [180,165,170]));