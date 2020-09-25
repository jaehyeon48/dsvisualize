// Doubly linked list-based stack

class Node {
  constructor(_data = null, _prev = null, _next = null) {
    this.data = _data;
    this.prev = _prev;
    this.next = _next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newData = new Node(data);
    if (this.size === 0) {
      this.top = newData;
    }
    else {
      newData.prev = this.top;
      this.top.next = newData;
      this.top = newData;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return console.log('The stack is empty. Cannot pop().');
    }
    else if (this.size === 1) {
      this.top = null;
    }
    else {
      this.top = this.top.prev;
      this.top.next = null;
    }
    this.size--;
  }

  getSize() {
    return this.size;
  }

  // get the top element's data
  peek() {
    return this.top.data;
  }

  print() {
    let currentNode = this.top;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.prev;
    }
  }

  clear() {
    if (this.size === 0) {
      return console.log('The stack is empty. Cannot clear().');
    }
    else {
      this.top = null;
      this.size = 0;
    }
  }

  // return all node data in the form of an array for rendering
  getAllNodesForRender() {
    const nodes = [];
    let currentNode = this.top;
    // push nodes from top to bottom order
    while (currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.prev;
    }

    // reverse for bottom to top order
    return nodes.reverse();
  }
}

export const STACK = new Stack();

// STACK.push(1);
// STACK.push(2);
// STACK.pop();
// STACK.push(3);

// // console.log(STACK.peek());

// // STACK.clear();

// console.log(STACK.getAllNodesForRender());