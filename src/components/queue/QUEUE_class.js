/* implemented queue data structure by circular linked list */

class Node {
  constructor(_data = null) {
    this.data = _data;
    this.prev = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(data) {
    const newData = new Node(data);
    if (this.size === 0) {
      this.front = this.rear = newData;
      newData.next = newData.prev = newData;
    }
    else {
      newData.next = this.front;
      newData.prev = this.rear;
      this.rear.next = newData;
      this.front.prev = newData;
      this.rear = newData;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return console.log('The queue is empty. Cannot dequeue().');
    }
    else if (this.size === 1) {
      this.front = this.rear = null;
    }
    else {
      this.front.next.prev = this.rear;
      this.rear.next = this.front.next;
      this.front = this.front.next;
    }
    this.size--;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.size === 0) {
      return console.log('The queue is empty.');
    }

    let currentNode = this.front;
    do {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
    while (currentNode !== this.front);
  }

  clear() {
    if (this.size === 0) {
      return console.log('The queue is empty. Cannot clear().');
    }

    this.front = this.rear = null;
    this.size = 0;
  }

  getAllNodesForRender() {
    const nodes = [];
    let currentNode = this.front;

    do {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }
    while (currentNode !== this.front);
    return nodes;
  }
}

const QUEUE = new Queue();

QUEUE.enqueue(1);
QUEUE.enqueue(2);
QUEUE.enqueue(3);

QUEUE.dequeue();

QUEUE.enqueue('a');

console.log(QUEUE.getAllNodesForRender());