// Pseudocode O(n^2)
// Start looping with a variable called i from the end towards the begining
// Start an inner loop with a variale called j from the begining until i-1
// If array[j] is greater than array[j+1], swap these two values
// Return the sorted array
// Bubble sort is efficient when an array is almost sorted

function bubbleSort(array) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    }

    let noSwaps;
    for (let i = array.length - 1; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return array;
}

bubbleSort([5,2,10,6,4])