class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const node = new ListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeHead() {
    this.head = this.head.next;
  }
}
