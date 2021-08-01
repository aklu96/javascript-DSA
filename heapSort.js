const Heap = require('./binaryHeap.js');

// O(N*log N) time complexity
const heapSort = (arr, comparator) => {
  const result = [];
  const heap = new Heap(comparator);
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    const root = heap.removeRoot();
    result.push(root);
  }
  return result;
};