// Pseudocode O(n^2)
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap id necessary
// Continue to the next element and if it is int the incorrect order, iterate through the sorted portion(i.e left side)
// to place the element in the correct place
// Repeat untill array is sorted

function insertionSort(array) {
    let i, j;
    for (i = 1; i < array.length; i++) {
        let currentVal = array[i];
        for (j = i-1; j >= 0 && array[j] > currentVal; j--) {
            array[j+1] = array[j]
        }
        array[j+1] = currentVal;
    }
    return array;
}

insertionSort([2,1,9, 76,4])