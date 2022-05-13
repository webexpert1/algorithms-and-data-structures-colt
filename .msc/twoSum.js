// Given an array of integers, return the indices of the two numbers whose sum is equal to a given target.
// You may assume that each input would have exactly one solution, and you may not
// use the same element twice
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// Soln
// initialize an empty map
// iterate over the elements of the array
// for each element in the array
//      check if the complement target - element exist in the map
//          if it exists then return the indicies of the current element and the complement
//          otherwise, put the element in the Map and move tho the next iteration
function twoSum(array, target) {
    const mapResult = new Map();
    for(let i = 0; i < array.length; i++) {
        let complement = target - array[i];
        if(mapResult.has(complement)) {
            return [mapResult.get(complement), i]
          
        } else {
            mapResult.set(array[i], i)
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))