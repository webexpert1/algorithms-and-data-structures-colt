// Doubly Linked list each node is connected via nodes with a next and previous pointer , 
// they dont have indices and also random access is not allowed
// Pseudocode

// push - this function adds a node a node to the end of the Linked List
// Create a new node using the value passed
// If there is no head property on the list, set the head and tail to be the new node
// otherwise set the next property on the tail to be the newly created node
// set the previous property on the newNode to be the old tail
// set the tail to the newNode
// Increment the lenght by 1

// pop - this function removes a node from the end of the Linked List
// store the current tail in a variable to return later
// if the lenght is 1, set the head and tail to be null
// update the tail to be the previous node
// set the new tail's next pointer to null
// decrement the length

// shift - this function removes a node from the begining of the Linked list
// If the length is 0, return undefined
// if the length is 1, set the head and tail to be null;
// store the head in a variable oldHead
// set the head to be the next property of the Oldhead;
// set the head's prev property to null
// decrement the length by 1

// unshift - this function adds a node to the begining of the Linked List
// It accepts a value, create a newNode with the value passed in
// If the list is empty, set the head and tail to be the newNode
// Store the current head in a variable
// set the next property of the newNode to the current head
// set the head to be the newNode

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addToHead(val) {
        let newNode = new Node(val);
        if(this.head)  {
            this.head.prev = newNode;
            this.head = newNode;
        }
        if(!this.head) {
            this.head = this.tail = newNode;
        }
       this.length++;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        ++this.length;
        return oldTail;
    }
    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let DL = new DoublyLinkedList();
DL.push('Hi')
DL.push('Ric')
DL.unshift('!')

