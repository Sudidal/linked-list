import { Node } from "./node";

class LinkedList {
  #head = null;
  #tail = null;

  constructor() {}

  append(value) {
    const newNode = new Node(value, null, null);
    if (!this.#head) {
      this.#setFirstNode(newNode);
    } else {
      this.#setTailNode(newNode);
    }
  }
  prepend(value) {
    const newNode = new Node(value, null, null);
    if (!this.#head) {
      this.#setFirstNode(newNode);
    } else {
      this.#setHeadNode(newNode);
    }
  }
  insertAt(value, index) {
    // insertion is outside of the loop, to be able
    // to insert elements event if the list is empty
    let curIndex = 0;
    let curNode = this.#head;
    while (curNode && curNode.getNext()) {
      if (curIndex === index) {
        break;
      }
      curIndex++;
      curNode = curNode.getNext();
    }
    const newNode = new Node(value, null, null);
    if (!this.#head) {
      this.#setFirstNode(newNode);
    } else {
      if (curNode === this.#head) {
        this.#setHeadNode(newNode);
      } else if (curNode === this.#tail) {
        this.#setTailNode(newNode);
      } else {
        this.insertNodeAfter(newNode, curNode);
      }
    }
  }

  pop() {
    if (this.#tail) {
      this.#removeTailNode();
    }
  }
  removeAt(index) {
    let curIndex = 0;
    let curNode = this.#head;
    while (curNode) {
      if (curIndex === index) {
        if (curNode === this.#head) {
          this.#removeHeadNode();
          return;
        } else if (curNode === this.#tail) {
          this.#removeTailNode();
          return;
        } else {
          this.removeSorroundedNode(curNode);
          return;
        }
      }
      curIndex++;
      curNode = curNode.getNext();
    }
  }

  getHead() {
    return this.#head;
  }
  getTail() {
    return this.#tail;
  }
  contains(value) {
    let curNode = this.#head;
    while (curNode) {
      if (curNode.getValue() === value) {
        return true;
      }
      curNode = curNode.getNext();
    }
    return false;
  }
  getItemByIndex(index) {
    let curIndex = 0;
    let curNode = this.#head;
    while (curNode) {
      if (curIndex === index) {
        return curNode;
      }
      curIndex++;
      curNode = curNode.getNext();
    }
    return null;
  }
  getItemByValue(value) {
    let curNode = this.#head;
    while (curNode) {
      if (curNode.getValue() === value) {
        return curNode;
      }
      curNode = curNode.getNext();
    }
    return null;
  }
  getSize() {
    let count = 0;
    let curNode = this.#head;
    while (curNode) {
      count++;
      curNode = curNode.getNext();
    }
    return count;
  }

  toString() {
    let result = "";
    let curNode = this.#head;
    if (!curNode) result = "Empty List";
    while (curNode) {
      result += curNode.getValue();
      if (curNode.getNext()) {
        result += " -> ";
      }
      curNode = curNode.getNext();
    }
    return result;
  }

  #setFirstNode(node) {
    this.#head = node;
    this.#tail = node;
    this.#head.setNext(this.#tail);
    this.#tail.setPrev(this.#head);
  }
  #setHeadNode(node) {
    node.setNext(this.#head);
    this.#head.setPrev(node);
    this.#head = node;
  }
  #setTailNode(node) {
    node.setPrev(this.#tail);
    this.#tail.setNext(node);
    this.#tail = node;
  }
  insertNodeAfter(node, placeNode) {
    node.setNext(placeNode.getNext());
    node.setPrev(placeNode);
    placeNode.getNext().setPrev(node);
    placeNode.setNext(node);
  }
  #removeHeadNode() {
    this.#head = this.#head.getNext();
    this.#head.setPrev(null);
  }
  #removeTailNode() {
    this.#tail = this.#tail.getPrev();
    this.#tail.setNext(null);
  }
  removeSorroundedNode(node) {
    node.getPrev().setNext(node.getNext());
    node.getNext.setPrev(node.getPrev);
  }
}

export { LinkedList };
