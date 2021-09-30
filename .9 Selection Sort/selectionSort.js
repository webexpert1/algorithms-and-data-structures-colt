// Pseudocode O(n^2)
// Store the first element as the smallest value you have seen soo far
// Compare the item to the next item in the array untill you find a smaller number
// If a smaller number is found, designate that smaller number to be the new minimum and continue untill the end of the array
// if the minimum is not the value(index) you initially began, swap the two values
// 

function selectionSort(array) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }

    let smallest, i, j;
    for (i = 0; i < array.length; i++) {
        smallest = i;
        for (j = i + 1; j < array.length; j++) {
            if(array[j] < array[smallest]) smallest = j;
        }
        if(i !== smallest) swap(array, i, smallest) 
    }
    return array;
}

console.log(selectionSort([3,1,7,5,4]))