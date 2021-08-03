/*
Given a sorted array, find the element in O(log n) time
Select the middle element of the array, and see if the element is it, or smaller or bigger
Consider the remaining half of the array until the answer is found
Return index of answer if found; return -1 if not found

[1, 2, 4, 5, 6, 7, 8]
target: 3
pick1: 5
arr2: 1, 2, 4
pick2: 2
arr3: 4
pick3: 4

*/

const binarySearch = (target, array) => {
  // use pointer and while loop method
  // init pointers
  let left = 0;
  let right = array.length - 1;

  // ex: length 7, 6 - 0 / 2 = 3; length 8, 7 - 0 / 2 = 3, so picks left index of two options for even lengthss
  let middle = Math.floor((right - left) / 2) + left;



  // ending condition:
  while (right >= left) {
    if (array[middle] === target) return middle;
    if (target < array[middle]) {
      // don't need to consider the middle again
      right = middle - 1;
      middle = Math.floor((right - left) / 2) + left;
    } else {
      // don't need to consider the middle again
      left = middle + 1;
      middle = Math.floor((right - left) / 2) + left;
    }
  }
  return -1;
};
