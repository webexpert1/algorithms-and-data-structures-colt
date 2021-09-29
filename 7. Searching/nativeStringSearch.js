// Pseudocode
// Loop over the longer string
//   Loop over the shorter string
//   If the characters dont match, break out of the inner loop
//   If the characters do match, keep going
//   If you complete the inner loop and find a match, increment the count of matches
//  Return count

function nativeStringSearch(longStr, shortStr) {
    let count = 0;
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i+j]) {
                break;
            };
           if(j === shortStr.length - 1) ++count;
        }
       
        
    }
     return count;
}

// JOHN SAID AHA BEFORE AHA BECAME POPULAR
console.log(nativeStringSearch('lorie loled lol', 'lol'))