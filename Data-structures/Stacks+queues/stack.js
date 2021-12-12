class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.prev = this.last;
      this.last = newNode;
    }
    return ++this.length;
  }

  pop() {
    if (!this.first) return null;
    const removedNode = this.last;
    if (this.first === this.last) {
      this.first = null;
    }
    this.last = removedNode.prev;
    removedNode.prev = null;
    this.length--;
    return removedNode.val;
  }
}

const stack = new Stack();
