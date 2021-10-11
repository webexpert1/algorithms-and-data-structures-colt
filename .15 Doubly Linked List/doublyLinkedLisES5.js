function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
}

DoublyLinkedList.prototype.addToHead = function(val) {
    // create a new node using the 'val' passed in
    let newNode = new Node(val, this.head, null);
    // if head exist, set the previous property of the head to the newNode
    if(this.head) this.head.prev = newNode;
    // if the list is empty, set the tail to be the newNode
    if(!this.head) this.tail = newNode;
    // set the head to be the new Node
    this.head = newNode;
}

var DLL = new DoublyLinkedList();
DLL.addToHead(10)
DLL.addToHead(20)
console.log(DLL)