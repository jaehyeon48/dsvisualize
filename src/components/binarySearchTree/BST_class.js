class Node {
  constructor(_data) {
    this.data = _data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class Bst {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      this.size++;
      return true;
    }
    else {
      let currentNode = this.root;

      while (currentNode) {
        if (currentNode.data > data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            newNode.parent = currentNode;
            this.size++;
            return true;
          }
          else {
            currentNode = currentNode.left;
          }
        }
        else if (currentNode.data < data) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            newNode.parent = currentNode;
            this.size++
            return true;
          }
          else {
            currentNode = currentNode.right;
          }
        }
        // if inserting data is already exists in the tree,
        // set 'currentNode' to null to exit the loop
        else {
          currentNode = null;
        }
      }
    }
    return false;
  }

  remove(removeData) {
    if (this.size === 0) {
      console.log('The tree is empty. Cannot remove().');
      return false;
    }

    let currentNode = this.root;

    // search through the tree to see whether the remove data is exist
    while (currentNode && currentNode.data !== removeData) {
      currentNode = (currentNode.data > removeData) ? currentNode.left : currentNode.right;
    }

    // if the remove data doesn't exist in the tree
    if (!currentNode) {
      console.log('The remove data does not exist. Cannot remove().');
      return false;
    }

    // if the node to be deleted is a leaf node
    if (this.isLeaf(currentNode)) {
      if (currentNode === this.root) {
        this.root = null;
        this.size--;
        return true;
      }

      if (currentNode.parent.left === currentNode) {
        currentNode.parent.left = null;
      }
      else {
        currentNode.parent.right = null;
      }
      this.size--;
      return true;
    }
    // if the node to be deleted has only left child
    else if (currentNode.left && !currentNode.right) {
      // if the node to be deleted is a root,
      // make its left child a root
      if (currentNode === this.root) {
        this.root = currentNode.left;
      }
      else if (currentNode.parent.left === currentNode) {
        currentNode.parent.left = currentNode.left;
      }
      else {
        currentNode.parent.right = currentNode.left;
      }

      this.size--;
      return true;
    }
    // if the node to be deleted has only right child
    else if (!currentNode.left && currentNode.right) {
      // if the node to be deleted is a root,
      // make its right child a root
      if (currentNode === this.root) {
        this.root = currentNode.right;
      }
      else if (currentNode.parent.left === currentNode) {
        currentNode.parent.left = currentNode.right;
      }
      else {
        currentNode.parent.right = currentNode.right;
      }

      this.size--;
      return true;
    }
    // if the node to be deleted has two children
    else {
      // find the smallest data node in the right subtree of the current node,
      // and make the smallest data node a successor
      let successorNode = currentNode.right;

      while (successorNode.left) {
        successorNode = successorNode.left;
      }

      currentNode.data = successorNode.data;

      // if the smallest data node has a right subtree,
      // make the right subtree a (left or right) child of the smallest's parent
      // depending on the successor's position
      if (successorNode.right) {
        if (successorNode.parent.left === successorNode) {
          successorNode.parent.left = successorNode.right;
        }
        else {
          successorNode.parent.right = successorNode.right;
        }
      }
      else {
        if (successorNode.parent.left === successorNode) {
          successorNode.parent.left = null;
        }
        else {
          successorNode.parent.right = null;
        }
      }

      this.size--;
      return true;
    }
  }

  search(searchData) {
    if (this.size === 0) {
      return console.log('The tree is empty. Cannot search().');
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.data === searchData) {
        return true;
      }
      else if (currentNode.data > searchData) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  isInternal(node) {
    if (!node.left && !node.right) return false;
    else return true;
  }

  isLeaf(node) {
    if (!node.left && !node.right) return true;
    else return false;
  }

  getRoot() {
    return this.root;
  }

  // returns number of nodes in the tree
  getSize() {
    return this.size;
  }

  // prints each node in pre-order way
  preOrder(treeNode) {
    if (!treeNode) return;
    console.log(treeNode.data);
    this.preOrder(treeNode.left);
    this.preOrder(treeNode.right);
  }

  // prints each node in in-order way
  inOrder(treeNode) {
    if (!treeNode) return;
    this.inOrder(treeNode.left);
    console.log(treeNode.data);
    this.inOrder(treeNode.right);
  }

  // prints each node in in-order way
  postOrder(treeNode) {
    if (!treeNode) return;
    this.postOrder(treeNode.left);
    this.postOrder(treeNode.right);
    console.log(treeNode.data);
  }

  clear() {
    if (this.size === 0) {
      return console.log('The tree is empty. Cannot clear().');
    }

    this.size = 0;
    this.root = null;
  }

  getAllNodesForRender() { }
}

// const BST = new Bst();
export const BST = new Bst();

// BST.insert(10);
// BST.insert(4);
// BST.insert(16);
// BST.insert(13);
// BST.insert(30);
// BST.insert(20);
// BST.insert(42);
// BST.insert(25);
// BST.insert(22);
// BST.insert(28);


// BST.preOrder(root);
// BST.inOrder(root);
// BST.postOrder(root);


// BST.remove(16);

// const root = BST.getRoot();
// BST.inOrder(root);

// BST.insert(1);
// BST.insert(2);
// BST.insert(3);

// BST.remove(1);

// BST.inOrder(BST.getRoot());