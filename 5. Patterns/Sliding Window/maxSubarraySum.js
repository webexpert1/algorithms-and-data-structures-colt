// This pattern involves creating a window which can either be an array of
// number from one position to another. Depending on certain condition, the 
// window either inncreases or decreases or closes.
// Very useful for keeping track of a subset of data in 
// an array/string etc.


// Write a function called maxSubarraySum which accepts an array of integers
// anda number called n. The function should calculate the maximum sum of n
// consecutive elements i the array.
// maxSubarraySum([4,2,6,1], 1)  => 6

// Solution 1 O(n^2)
function maxSubarraySum(array, num) {
    if(array.length < num) return null;
    let tempSum, maxSum = 0;

    for (let i = 0; i < array.length - num + 1; i++) {
        tempSum = 0;
        for (let j = 0; j < num; j++) {
            tempSum += array[i+j];
        }
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// Solution 2 O(n)
function maxSubarraySum(array, num) {
    let tempSum = 0, maxSum = 0;
    if(array.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;

    for (let i = num; i < array.length; i++) {
        const element = array[i];
        tempSum = tempSum - array[i-num] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)