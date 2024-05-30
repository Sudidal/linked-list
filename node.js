class Node {
  #value;
  #next;
  #prev;
  constructor(value = null, next = null, prev = null) {
    this.#value = value;
    this.#next = next;
    this.#prev = prev;
  }
  setValue(value) {
    this.#value = value;
  }
  setNext(node) {
    this.#next = node;
  }
  setPrev(node) {
    this.#prev = node;
  }
  getValue = () => this.#value;
  getNext = () => this.#next;
  getPrev = () => this.#prev;
}

export { Node };
