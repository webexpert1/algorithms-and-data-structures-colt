// Recursion is a function that calls itself
// Invoke the same function with different input until you reach base case
// Base case : the condition when the recursion ends.

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

sumRange(3)