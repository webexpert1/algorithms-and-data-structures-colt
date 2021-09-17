// Write a function that takes two arrays with same freq
// each element should have its item squared in the second array

// create a function On^2
function same(arr1, arr2) {
    debugger
    if(arr1.length !== arr2.length) return false;
    // loop throuth the first array
    for(let i = 0; i < arr1.length; i++) {
        // locate its index in the second array
        // for each item, look for the corresponding square
        let currentIndex = arr2.indexOf(arr1[i]**2);
        if(currentIndex === -1) return false;

        arr2.splice(currentIndex, 1);
    }
     return true
}
//  same([1,2,3], [9,4,1])

// better O(n)
// loop through each array once and update its frequency
// loop through first array and check for its quare in the second array
// chaek for freq match
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] =  ++frequencyCounter1[val] || 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key**2 in frequencyCounter2)) return false;

        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
    }

    return true;
 }

 // Challange 2
 // Write a functon to determine if the second string is an anagram of the first
 // An anagram is a word or phrase, or name formed by rearranging the letters of anothe
 // such as cinema fromed from iceman

 function validAnagram(first, second) {
     if(first.length !== second.length) return false;

     const lookup = {};

     // loop through the first string
     for(let i = 0; i < first.length; i++) {
         let letter = first[i];
         lookup[letter] = ++lookup[letter] || 1
     }

     // loop throung the second string
     for(let i = 0; i < second.length; i++) {
         let letter = second[i];

         if(!lookup[letter]) {
             return false;
         } else {
             --lookup[letter];
         }
     }
     return true
 }

console.log(validAnagram('aaz', 'zba'))