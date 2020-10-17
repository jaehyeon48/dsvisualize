class Node {
  constructor(_data = null, _prev = null, _next = null) {
    this.next = _next;
    this.prev = _prev;
    this.data = _data;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  print() {
    let cur = this.front;
    while (cur) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  insertFront(value) {
    if (this.size === 0) {
      this.front = this.back = new Node(value);
    }
    else {
      const newNode = new Node(value);
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }

  insertBack(value) {
    if (this.size === 0) {
      this.front = this.back = new Node(value);
    }
    else {
      const newNode = new Node(value);
      newNode.prev = this.back;
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  removeFront() {
    if (this.size === 0) {
      console.log('The Deque is empty. Cannot removeFront().');
      return -1;
    }
    else if (this.size === 1) {
      this.front = this.back = null;
    }
    else {
      this.front = this.front.next;
      this.front.prev = null;
    }
    this.size--;
  }

  removeBack() {
    if (this.size === 0) {
      console.log('The Deque is empty. Cannot removeBack().');
      return -1;
    }
    else if (this.size === 1) {
      this.front = this.back = null;
    }
    else {
      this.back = this.back.prev;
      this.back.next = null;
    }
    this.size--;
  }

  getSize() {
    return this.size;
  }

  clear() {
    if (this.size === 0) {
      console.log('The Deque is empty. Cannot clear().');
      return -1;
    }
    this.front = this.back = null;
    this.size = 0;
  }

  getAllNodesForRender() {
    const nodes = [];
    let currentNode = this.front;

    while (currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

export const DEQUE = new Deque();