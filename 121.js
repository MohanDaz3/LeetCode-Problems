// 121. Best Time to Buy and Sell Stock
// link:https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit=0
    let min=prices[0]
    for(let i=1;i<prices.length;i++){
        let price=prices[i]
        if(price<min){
            min=price
        }
        let sum=price-min
        if(sum>profit){
            profit=sum
        }
        
    }
    return profit
};
console.log(maxProfit([7,5,11,1,5,3,6,4,8]));
console.log(maxProfit([7,6,4,3,1]));
