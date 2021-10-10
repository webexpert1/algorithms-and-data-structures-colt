// Singly Linked list each node is only connected via nodes with a next pointer, 
// they dont have indices and also random access is not allowed
// Pseudocode

// push - this function should accept a value
// Create a new node using the value passed
// If there is no head property on the list, set the head and tail to be the new node
// otherwise set the next property on the list to be the newly created node
// Increment the lenght by 1

// pop - this function removes a node from the end of the Linked List
// If there are no nodes in the list, return undefined
// Loop through the list untill you reach the tail, Set the next property of the 2nd to last to be null
// set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// return the value of the node removed.

// Shift - this function removes a node from the begining of a Linked List
// if threre are no nodes return undefined
// Store the current head property in a variale
// Set the head property to be the current head's next property
// Decrement the length by 1

// Unshift - this function adds a node to the begining of a Linked List
// this function should accept a value
// create a newNode using the value , set the next property to the head
// set the head to be the new head, increment the length 
// return the object

// get - this function should accept an index
// if the index is less than zero, or greater than or equal to the length of the list, return null
// loop through the list untill you reach the index and return the node at the specified index

// set - this function should accept an index and a value
// use get function to find the specific node
// if the node is not found, return false
// if the node is found, set the value of that node to be the value passed to the function and return true

// insert - this function should accept an index and a value
// if the index is less than zero or greater than length, return false
// if the index is same as the length, push a new node to the end of the list
// if the index is 0, unshift a new node to the start of the list
// use get method to access the node at index - 1
// set the next property on that node to be the new node
// set the next property on the new node to be the previous next
// return true

// Remove this function should accept an index
// if the index is less than zero or greater than length return undefined
// if the index is same as the length, pop
// use get method to get the prevNode at index -1
// set the next property on the prevNode to a temp variable
// set hte next property of prevNode to the next property of temp

// Reversing - this function reverses a linked list
// Create variables called prev and next
// Create a variable called node and initialize it to the head property
// Loop through the list
// Set next to be the next property on whatever node is
// Set the next property on the node to be whatever prev is
// Set the node variable to be the value of the next variable

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
    pop() {
        if(!this.head) return undefined;
        let currentNode = this.head,
            prevNode = null;
        while(currentNode.next) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        this.tail = prevNode;
        --this.length;
        if(this.length === 0) {
            this.head = this.tail = null;
        }
        return currentNode;
    }
    shift() {
        if(!this.head) return undefined; 
        let oldHead = this.head;
        this.head = this.head.next;
        --this.length;
        if(this.length === 0) this.tail = null;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        ++this.length;
        return this;
    }
    get(index) {
        if(index < 0 || index > this.length) return undefined;
        let counter = 0, current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        let found = this.get(index);
        if(found) return false;
        found.val = val;
        return true
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(val);

        let prevNode = this.get(index-1);
        let temp = prevNode.next;
        let newNode =  new Node(val);

        prevNode.next = newNode;
        newNode.next = temp;
        ++this.length;
        return true;
    }
    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.pop();

        let prevNode = this.get(index-1);
        let temp = prevNode.next;
        prevNode.next = temp.next;
        --this.length;
        return temp;
    }
}

let list = new SinglyLinkedList();
list.push('hi')
list.push('there')
list.push('Ric');
list.unshift('!')
// list.get(2)
console.log(list.remove(2, 'Ric'))