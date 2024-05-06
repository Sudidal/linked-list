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
      assign(this.head, newNode);
      assign(this.tail, newNode);
    } else {
      assign(this.tail.next, newNode);
      assign(newNode.prev, this.tail);
      assign(this.tail, newNode);
    }
  }
  prepend(value) {
    const newNode = Node(value);
    if (!this.head) {
      assign(this.head, newNode);
      assign(this.tail, newNode);
    } else {
      assign(this.head.prev, newNode);
      assign(newNode.next, this.head);
      assign(this.head, newNode);
    }
  }
  insertAt(index, value) {
    let curIndex = 0;
    let curNode = this.head;
    while (curNode) {
      if (curIndex === index) {
        const newNode = Node(value);
        if (!this.head) {
          assign(this.head, newNode);
          assign(this.tail, newNode);
        } else {
          if (curNode === this.head) {
            assign(newNode.next, this.head);
            assign(this.head.prev, newNode);
            assign(this.head, newNode);
          } else if (curNode === this.tail) {
            assign(newNode.prev, this.tail.prev);
            assign(newNode.next, this.tail);
            assign(this.tail.prev.next, newNode);
            assign(this.tail.prev, newNode);
          } else {
            assign(newNode.next, curNode);
            assign(newNode.prev, curNode.prev);
            assign(curNode.prev.next, newNode);
            assign(curNode.next.prev, newNode);
            assign(curnode.prev, newNode);
          }
        }
      }
      curIndex++;
      curNode = curNode.next;
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
  removeAt(index) {
    let curIndex = 0;
    let curNode = this.head;
    while (curNode) {
      if (curIndex === index) {
        if (curNode === this.head) {
          assign(this.head, curNode.next);
          assign(this.head.next, null);
        } else if (curNode === this.tail) {
          assign(this.tail, curNode.prev);
          assign(this.tail.prev, null);
        } else {
          assign(curNode.next.prev, curNode.prev);
          assign(curNode.prev.next, curNode.next);
        }
        return true;
      }
      curIndex++;
      curNode = curNode.next;
    }
    return false;
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
function assign(variable, to) {
  if (variable) {
    variable = to;
  }
}

export { LinkedList };

//TESTING

// const myList = new LinkedList();
// myList.append("item 1");
// myList.append("item 2");
// myList.append("item 4");
// myList.insertAt(2, "item 3");
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
