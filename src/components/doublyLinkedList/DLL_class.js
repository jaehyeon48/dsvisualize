import { v4 as uuidv4 } from 'uuid';

class Node {
  constructor(_data = null, _prev = null, _next = null) {
    this.prev = _prev;
    this.next = _next;
    this.data = _data;
    this.id = uuidv4();
  }
}

export class DLinkedList {
  constructor(data = null) {
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  // add data to the last place of the list
  append(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    }
    else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // remove data at the last place of the list
  pop() {
    if (this.length === 0) {
      console.log("The list is empty. Cannot pop().");
      return;
    }
    else if (this.length === 1) {
      this.head = this.tail = null;
    }
    else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.length--;
  }

  // add data to the first place of the list
  unshift(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  // remove data at the first place of the list
  shift() {
    if (this.length === 0) {
      console.log("The list is empty. Cannot shift().");
      return;
    }
    else if (this.length === 1) {
      this.head = this.tail = null;
    }
    else {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    this.length--;
  }

  // insert data into the specified index
  insertAt(insertIndex, data) {
    if (insertIndex < 0 || insertIndex > this.length) {
      console.log("Insert index out of bounds.");
      return;
    }
    else if (insertIndex === 0) {
      return this.unshift(data);
    }
    else if (insertIndex === this.length) {
      return this.append(data);
    }
    else {
      const newNode = new Node(data);
      let oneBeforeInsertNode = this.head;
      for (let i = 0; i < insertIndex - 1; i++) {
        oneBeforeInsertNode = oneBeforeInsertNode.next;
      }
      newNode.prev = oneBeforeInsertNode;
      newNode.next = oneBeforeInsertNode.next;
      oneBeforeInsertNode.next.prev = newNode;
      oneBeforeInsertNode.next = newNode;
      this.length++;
    }
  }

  // remove data from the specified index
  removeAt(removeIndex) {
    if (removeIndex < 0 || removeIndex >= this.length) {
      console.log("Remove index out of bounds.");
      return;
    }
    else if (this.length === 0) {
      console.log("The list is empty. Cannot removeAt().");
      return;
    }
    else if (removeIndex === 0) {
      return this.unshift();
    }
    else if (removeIndex === this.length - 1) {
      return this.pop();
    }
    else {
      let oneBeforeRemoveNode = this.head;
      for (let i = 0; i < removeIndex - 1; i++) {
        oneBeforeRemoveNode = oneBeforeRemoveNode.next;
      }
      oneBeforeRemoveNode.next = oneBeforeRemoveNode.next.next;
      oneBeforeRemoveNode.next.next.prev = oneBeforeRemoveNode;
      this.length--;
    }
  }

  // return node's index if found
  search(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.data === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return null;
  }

  clear() {
    this.head = this.tail = null;
    this.length = 0;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  // return all node data in the form of an array for rendering
  getAllNodesForRender() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push({
        id: currentNode.id,
        data: currentNode.data
      });
      currentNode = currentNode.next;
    }

    return nodes;
  }
}

// const myDoublyLinkedList = new DLinkedList(1);
// myDoublyLinkedList.shift();
// myDoublyLinkedList.append(2);
// myDoublyLinkedList.append(3);
// myDoublyLinkedList.unshift(100);
// myDoublyLinkedList.append(4);
// myDoublyLinkedList.insertAt(4, 'a');

// myDoublyLinkedList.removeAt(2);

// myDoublyLinkedList.clear();

// myDoublyLinkedList.print();