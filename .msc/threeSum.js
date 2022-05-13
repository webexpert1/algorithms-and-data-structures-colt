// Given an array of integers, find all triplets in the array that sum up to a given target value.

// In other words, given an array arr and a target value target, return all triplets a, b, c such that a + b + c = target.

// Example:

// Input array: [7, 12, 3, 1, 2, -6, 5, -8, 6]
// Target sum: 0

// Output: [[2, -8, 6], [3, 5, -8], [1, -6, 5]]

function threeSum(array, target) {
   
    for (let index = 0; index < array.length; index++) {
        let left = index + 1, right = array.length - 1;
        while(left < right) {
            if(array[index] + array[left] + array[right] < target) {
                left++
            } else if(array[index] + array[left] + array[right] > target) {
                --right;
            } else {
                return  [array[index], array[left], array[right]]
            }
        }
    }

}

console.log(threeSum([7, 12, 3, 1, 2, -6, 5, -8, 6], 0))