
// let average = num => (num[0] + num[1] + num[2]) / num.length;

console.log(average([1 , 4 , 7]));
console.log(average([1.5, 3, 2.5, 1]));

let average = (num) => {
    let total = 0;
    for(let i = 0; i < num.length; i++){
        total = total + num[i];
    }
    return total / num.length;
} 

console.log(average([1 , 4 , 7]));
console.log(average([10, 5]));
console.log(average([1.5, 3, 2.5, 1]));


// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
// beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on 
// Arrays to aid in working through this problem. 


let arr = (nums, target) => {
    let x = nums.indexOf(target);
    if (x) {
        return x;
    } else {
        return -1;
    } 
}

console.log(arr(nums = [4,5,6,7,0,1,2], target = 0));
console.log(arr(nums = [4,5,6,7,0,1,2], target = 3));


//VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
// and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1












