class Node {
  constructor(_data = null, _next = null) {
    this.next = _next;
    this.data = _data;
  }
}

class SLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add data to the last place of the list
  append(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // remove data at the last place of the list
  pop() {
    if (this.length === 0) {
      return console.log("The list is empty. Cannot pop()");
    }
    else if (this.length === 1) {
      this.head = this.tail = null;
    }
    else {
      let nodeOneBeforeTail = this.head; // node one position before the tail

      while (nodeOneBeforeTail.next !== this.tail) {
        nodeOneBeforeTail = nodeOneBeforeTail.next;
      }

      nodeOneBeforeTail.next = null;
      this.tail = nodeOneBeforeTail;
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
      this.head = newNode;
    }
    this.length++;
  }

  // remove data at the first place of the list
  shift() {
    if (this.length === 0) {
      return console.log("The list is empty. Cannot shift()");
    }
    else if (this.length === 1) {
      this.head = this.tail = null;
    }
    else {
      this.head = this.head.next;
    }
    this.length--;
  }

  // insert data into the specified index
  insertAt(insertIndex, data) {
    if (insertIndex < 0 || insertIndex > this.length) {
      console.log("Insert index out of bounds.");
      return -1; // return -1 for alerting message at the frontend
    }
    else if (insertIndex === 0) {
      return this.unshift(data);
    }
    else if (insertIndex === this.length) {
      return this.append(data);
    }
    else {
      const newNode = new Node(data);
      let nodeOneBeforeInsert = this.head; // node one position before insert place

      for (let i = 0; i < insertIndex - 1; i++) {
        nodeOneBeforeInsert = nodeOneBeforeInsert.next;
      }

      newNode.next = nodeOneBeforeInsert.next;
      nodeOneBeforeInsert.next = newNode;
      this.length++;
    }
  }

  // remove data from the specified index
  removeAt(removeIndex) {
    if (removeIndex < 0 || removeIndex >= this.length) {
      console.log("Remove index out of bounds.");
      return -1; // return -1 for alerting message at the frontend
    }
    else if (removeIndex === 0) {
      return this.shift();
    }
    else if (removeIndex === this.length - 1) {
      return this.pop();
    }
    else {
      let nodeOneBeforeRemove = this.head; // node one position before the removing node

      for (let i = 0; i < removeIndex - 1; i++) {
        nodeOneBeforeRemove = nodeOneBeforeRemove.next;
      }

      nodeOneBeforeRemove.next = nodeOneBeforeRemove.next.next;
      this.length--;
    }
  }

  clear() {
    if (this.length === 0) {
      return console.log("The list is empty. Cannot clear()");
    }
    else {
      this.head = this.tail = 0;
      this.length = 0;
    }
  }

  print() {
    if (this.length === 0) {
      return console.log("The list is empty.");
    }

    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  getLength() {
    return this.length;
  }

  getAllNodesForRender() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

export const SLL = new SLinkedList();
// const SLL = new SLinkedList();

// SLL.append(1);
// SLL.append(4);
// SLL.insertAt(0, 2);
// SLL.unshift(3);
// SLL.removeAt(1);

// SLL.print();