class PrirityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value,priority) {
        var newNode = new Node(value, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx]

        while(idx > 0) {
          let  parentIndex = Math.floor((idx-1)/2)
          let parent = this.values[parentIndex];

          if(element.priority <= parent.priority) break;
          this.values[parentIndex] = element;
          this.values[idx] = parent;
          idx = parentIndex;
        }
    }
    dequeue() {
        let max = this.values[0];
        let end = this.values.pop();

        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown()
        }
        return max;
    }
    sinkDown() {
        let length = this.values.length;
        let idx = 0;
        let element = this.values[0];

        
        while(true) {
            let leftChildIndex, rightChildIndex, leftChild, rightChild, swap = null;

            leftChildIndex = 2 * idx + 1;
            rightChildIndex = 2* idx + 2;

            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(element.priority < leftChild.priority) {
                    swap = leftChildIndex;
                }
            }
            
            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if(swap === null && element.priority < rightChild.priority  || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;
           
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap
            
        }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

let pq = new PrirityQueue();
pq.enqueue('Knife Wound', 4)
pq.enqueue('relax', 2);
pq.enqueue('operation', 6)
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
