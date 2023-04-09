// 98. Validate Binary Search Tree
// link:https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {boolean}
 */

var isValidBST = function(root) {
    return isBST(root,-Infinity,Infinity)
};

function isBST(node,min,max){
    if(!node){
        return true
    }
    if(node.val<min||node.val>max){
        return false
    }
    return(
        isBST(node.left,min,node.val)&&
        isBST(node.right,node.val,max)
    )

}
console.log(isValidBST([2,1,3]));
