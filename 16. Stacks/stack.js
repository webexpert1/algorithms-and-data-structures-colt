// A Last In FIrst Out Data Structure
// used to manage function invocations, undo/redo, Routing - history object

// Linked List Implementatin of Stack
// BIO O of Stacks
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)

// push - the function should accept a value
// if there are no nodes in the stack, set te first and last property to be the newly created node
// if there is at least one node, create a variable that stores the curret first property on the stack
// reset the first property to be the newly created node
// set the next property to be the previously created variable
// increment the size

// pop - if there are no nodes in the stack return null
// create a temporary varible to store the first property on the stack
// if there is only 1 node, set the first and last property to be null
// if there is more than one node, set the first property to be the next property on the current first



class Node {
    constructor(value) {
        this.next = null;
        this.value = value
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    push(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = this.first;
            newNode.next = temp;
            this.first = newNode;
        }
        return this.size++;
    }
    pop() {
        if(!this.first) return null;
        let poppedNode = this.first;
        
        if(this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return poppedNode.value;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2)
stack.push(3)
stack.pop()
console.log(stack.pop())