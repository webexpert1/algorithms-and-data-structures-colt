// Collect Odd values - Helper method recursion
function collectOddValues(array) {
    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) return;

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }
    helper(array)

    return result;
}

// Collect Odd values - Pure recursion
function collectOddValues(array) {
    let newArray = [];

    if(array.length === 0) return newArray;
    
    if(array[0] % 2 !== 0) {
        newArray.push(array[0]);
    }

    newArray = newArray.concat(collectOddValues(array.slice(1)))
    return newArray;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))