// A tree is a data structure that consists of nodes in a parent/child relationship
// Binary trees can have values of any type, but at most two children for each parent

// FInd Starring at the toot
// Check if there is a root, if not, we are done searching
// If there is a root, check if the value of the new node is the value we are looking for
// If not, check to see if the value is greater than or less thant the value of the root
// If it is greater
//      Check to see if there is a node to the right
//      If there is, move that node and repeat there steps
//      If thre is not, we are done searching
// If it is less
//      Check to see if there is a node to the left
//      If there is, move that node and repeat there steps
//      If thre is not, we are done searching

// BFS Create a queue and a variable to store the values of nodes visited
// Place the root node in the queue
// loop as long as there is anything in the queue
//      Dequeue a node from the queue and push the value of the node into that variable that stores node
//      If there is left property on the node dequeued, add it to the queue
//      If there i a right property on the node dequeued, add it to the queue
// Return the variable that stores the values visited

// DFSPreOrder, Create a variable to store the values of nodes visited
// Store the rrot of BST in a variable called current
// Write a helper function which accepts a node
// Push the vale of the node to the variable that stores the values
// If the node has a left property, call the helper function with the left property on he node
// If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// return the array of values


// DFSPostOrder, Create a variable to store the values of nodes visited
// Store the rrot of BST in a variable called current
// Write a helper function which accepts a node
// If the node has a left property, call the helper function with the left property on he node
// If the node has a right property, call the helper function with the right property on the node
// Push the vale of the node to the variable that stores the values
// Invoke the helper function with the current variable
// return the array of values

// DFSInOrder, Create a variable to store the values of nodes visited
// Store the rrot of BST in a variable called current
// Write a helper function which accepts a node
// If the node has a left property, call the helper function with the left property on he node
// Push the vale of the node to the variable that stores the values
// If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// return the array of values


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }

    }
    find(value) {
        if(this.root === null) return false;
        let current = this.root, found = false;
        while(current && !found) {
            if(current.value === value) return true;
            if(value < current.value) {
                current = current.left
            } else {
                current = current.right;
            }
        }
        if(!found) return false
    }
    BFS() {
        let node = null;
        let visited = [], queue = [];

        queue.push(this.root);
        while(queue.length) {
            node = queue.shift();
            visited.push(node.value)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return this.visited;
    }
    DFSPreOrder() {
        let visited = [], current = this.root;
        function traverse(node) {
            visited.push(node.value)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
    DFSPostOrder() {
        let visited = [], current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value)
        }
        traverse(current);
        return visited;
    }
    DFSInOrder() {
        let visited = [], current = this.root;

        function traverse(node) {
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right)
        }
        traverse(current);
        return visited;
    }
}   

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3)
bst.insert(8);
bst.insert(20)

bst.DFSInOrder()