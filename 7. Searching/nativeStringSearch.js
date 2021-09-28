// Pseudocode
// Loop over the longer string
//   Loop over the shorter string
//   If the characters dont match, break out of the inner loop
//   If the characters do match, keep going
//   If you complete the inner loop and find a match, increment the count of matches
//  Return count

function nativeStringSearch(longStr, shortStr) {
    let match = 0;
    for (let i = 0; i < longStr.length; i++) {
        // const element = array[i];

        for (let j = 0; j < shortStr.length; j++) {
            // const element = array[j];
            if(shortStr[j] !== longStr[i+j]) continue;
        }
        ++match;
        
    }
    return match;
}

console.log(nativeStringSearch('JOHN SAID AHA BEFORE AHA BECAME POPULAR', 'AHA'))