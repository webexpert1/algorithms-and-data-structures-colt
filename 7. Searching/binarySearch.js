// This function accepts a sorted array and a value
// Create a left pointer at the start of the array and a right pointer are the end of the array
// While the left pointer comes before the right pointer:
//    Create a pointer in the middle
//    If you find the value you want, return the index
//    If the value is too small, move the left pointer up
//    If the value is too large, move the right pointer down
// If you never find the value return -1

function binarySearch(array, value) {
    let left = 0,
        right = array.length - 1;
    while(left < right) {
        let middle = Math.floor((left + right)/2);

        if(array[middle] < value) {
            left = middle + 1;
        } else if( array[middle] > value) {
            right = middle - 1;
        } else return middle;
    }
    return -1
}

binarySearch([1,3,5,6,8,9,10,11,12,14,15], 19)