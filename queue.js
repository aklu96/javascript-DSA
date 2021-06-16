class Queue {

  constructor() {
    this.storage = {};
    this.index = 0;
  }

  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  dequeue() {
    this.index--;
    var deletedItem = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[this.index];
    return deletedItem;
  }

  size() {
    var size = 0;
    for (var key in this.storage) {
      if (this.storage[key]) {
        size++;
      }
    }
    return size;
  }

}

module.exports = Queue;
