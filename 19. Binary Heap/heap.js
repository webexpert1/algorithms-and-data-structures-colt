//

// Insert - push the value into the value property on the beap
// Buble Up:
// Create a variable called index which is the length of the values property
// Create a variable called parendIndex which is the floor of index-1/2
// Keep looping as long as the values element is at the child index
// Swap the value of the values element at the parentIndex with the vale for the element property at the child index
// Set the index to be the parentIndex, and start over

class BinaryHeap {
    constructor() {
        this.values = [41,39,33, 18,27,12,55,6];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while(idx > 0) {
            let parentIndex = Math.floor((idx-1)/2);
            let parent = this.values[parentIndex];

            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[idx] = parent;
            idx = parentIndex
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIndex = 2 * idx + 1;
            let rightChildIndex = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if((swap === null & rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

let heap = new BinaryHeap();
console.log(heap.extractMax())

// [41,39,33, 18,27,12, 55]