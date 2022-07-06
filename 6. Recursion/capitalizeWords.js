// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    let result = [];

    if(arr.length == 0) return result;

    result.push(arr[0].toLocaleUpperCase())
    return [...result, capitalizeWords(arr.slice(1))]
}

console.log(capitalizeWords(['james', 'mike']))