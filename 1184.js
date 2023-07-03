// 1184. Distance Between Bus Stops
// link:https://leetcode.com/problems/distance-between-bus-stops/



/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let n=distance.length-1

    for(let i=0;i<distance.length;i++){
          if(i===destination){
            return i
          }
    }
 
 };

 console.log(distanceBetweenBusStops([1,2,3,4],0,1));  //1
 console.log(distanceBetweenBusStops([1,2,3,4],0,2));  //3
 console.log(distanceBetweenBusStops([1,2,3,4],0,3));  //4