class LinkedList {
  constructor() {
    this.listHead = null;
    this.listTail = null;
  }

  head() { // Complete
    return this.listHead;
  }

  tail() { // Complete
    return this.listTail;
  }

  append(value) { // Complete
    let newNode = new Node(value);
    if (!this.listHead) {
      this.listHead = newNode;
      this.listTail = newNode;
    } else {
      this.listTail.nextNode = newNode;
      this.listTail = newNode;
      newNode.nextNode = null;
    }
  }

  prepend(value) { // Complete
    let newNode = new Node(value);
    if (!this.listHead) {
      this.listHead = newNode;
    } else {
      newNode.nextNode = this.listHead;
      this.listHead = newNode;
    }
  }

  size() { // Complete
    if (!this.listHead) {
      return 0;
    } else {
      let size = 0;
      let currentNode = this.listHead;
      while (currentNode) {
        size += 1;
        currentNode = currentNode.nextNode;
      }
      return size;
    }
  }

  at(index) {
    if (this.listHead) {
        let currentNode = this.listHead;
        for (let i=0; i<index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    } else {
        return null;
    }
  }

  pop() {
    if (this.listTail) {
      this.listTail = null;
      let currentNode = this.listHead;
      while (currentNode.next) {
        currentNode = currentNode.nextNode;
      }
      this.listTail = currentNode;
    }
  }

  contains(value) { // Complete
    if (!this.listHead) {
        return false;
    } else {
        let currentNode = this.listHead;
        while (currentNode) {
            if (currentNode.value == value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
  }

  find(value) { // Complete
    let index = 0;
    let currentNode;
    if (!this.listHead) {
        return null;
    } else {
        currentNode = this.listHead;
        while (currentNode) {
            if (currentNode.value == value) {
                return index;
            } else {
                index += 1;
                currentNode = currentNode.nextNode;
            }
        }
        return null;
    }
  }

  toString() { // Complete
    if (this.listHead) {
      let currentString = `(${ this.listHead.value })`;
      let currentNode = this.listHead;
      while (currentNode.nextNode) {
        currentString += ` => (${ currentNode.nextNode.value })`;
        currentNode = currentNode.nextNode;
      }
      currentString += " -> null"
      return currentString;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
  }

  nextNode;
}

export { LinkedList };
