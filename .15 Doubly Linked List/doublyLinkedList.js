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

// get - this function returns a node at a given index
// if the index is less than or equal than half the length of the list
//      start the loop from the head and move towards the middle of the list
//      return the node once found
// if the index is greater than half the length of the list
//      start the loop from the head and move towards the middle of the list
//      return the node once found

// set - this function updates the value in a given index
// use the get function to get the node at the specified index
//   if get returns a valid node, set the valie of that node to be the value passed to the funcion
//   return true
// Otherwise, return false

// insert - this function inserts a node at a given index
// if the index is zero, unshift
// if the index is same as length, push
// use the get method to access the index-1
// set the next and prev properties on the correct nodes to link everything together
// increment the length, return true

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
            this.head = newNode;
            this.tail = this.head;
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
    get(index) {
        if(index < 0 || index > this.length) return null;
        let counter, current;
        if(index <= this.length/2) {
            counter = 0, current = this.head;
            while(index !== counter) {
                counter++;
                current = current.next;
            }
        }
        else {
            counter = this.length -1 , current = this.tail;
            while(index !== counter) {
                counter++;
                current = current.prev;
            }
        }
        return current;
    }
    set(index, val) {
        let found = this.get(index);
        if(found !== null) {
            found.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index-1)
        let temp = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = temp;
        this.length++

        return true;
    }
}

let DL = new DoublyLinkedList();
DL.push('100')
DL.push('300')
DL.push('400')
DL.insert(1, '200')

