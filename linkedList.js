function Node(_value) {
  let value = _value;
  let next = null;
  let prev = null;
  return { value, next, prev };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  prepend(value) {
    const newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  size() {
    let count = 0;
    let curNode = this.head;
    while (curNode) {
      curNode = curNode.next;
      count++;
    }
    return count;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  at(index) {
    let counter = 0;
    let curNode = this.head;
    while (curNode) {
      if (counter === index) {
        return curNode;
      }
      counter++;
      curNode = curNode.next;
    }
    return null;
  }
  pop() {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  contains(value) {
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) return true;
      curNode = curNode.next;
    }
    return false;
  }
  find(value) {
    let index = 0;
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return index;
      }
      index++;
      curNode = curNode.next;
    }
    return null;
  }
  toString() {
    let curNode = this.head;
    let string = "Empty List";
    if (curNode) string = "";
    while (curNode !== null) {
      if (curNode.prev) {
        string += " -> ";
      }
      string += `(${curNode.value})`;
      curNode = curNode.next;
    }
    return string;
  }
}

export { LinkedList };

//TESTING

// const myList = new LinkedList();
// myList.append("item 2");
// myList.append("item 3");
// myList.prepend("item 1");
// console.log("list size: " + myList.size());
// console.log("head: " + myList.getHead().value);
// console.log("tail: " + myList.getTail().value);
// console.log("item at index 1: " + myList.at(1).value);
// console.log("does it contain item 2: " + myList.contains("item 2"));
// console.log("what is the index of item 2: " + myList.find("item 2"));
// console.log("does it contain item 45: " + myList.contains("item 45"));
// console.log(myList.toString());
// myList.pop();
// console.log("tail after pop: " + myList.getTail().value);
