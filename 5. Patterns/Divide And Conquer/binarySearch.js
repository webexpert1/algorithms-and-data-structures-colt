// Divide and conquer pattern involves dividing a dataset into smaller
// chunks and then repeating a process with subset of data.


function binarySearch(array, val) {
    let min = 0,
        max = array.length -1;
    
    while(min <= max) {
        let middle = Math.floor((min + max)/2);
        let currentElement = array[middle];

        if(currentElement < val) {
            min = middle + 1;
        } else if(currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6], 7))