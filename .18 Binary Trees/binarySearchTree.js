// A tree is a data structure that consists of nodes in a parent/child relationship

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
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(13);
bst.insert(5)