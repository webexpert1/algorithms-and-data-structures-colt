

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