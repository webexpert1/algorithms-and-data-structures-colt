// Singly Linked list each node is only connected one directionally to the next node
// Pseudocode

// push - this function should accept a value
// Create a new node using the value passed
// If there is no head property on the list, set the head and tail to be the new node
// otherwise set the next property on the list to be the newly created node
// Increment the lenght by 1

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push('hi')
list.push('there')
console.log(list)