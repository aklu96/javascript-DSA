/*
Given an array of elements,
we want to recursively split the array into left and right halves
and merge the two halfs
*/

const mergeArrays = (arr1, arr2) => {
  const merged = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      merged.push(arr1[p1]);
      p1++;
    } else {
      merged.push(arr2[p2]);
      p2++;
    }
  }

  if (p1 < arr1.length) {
    for (let i = p1; i < arr1.length; i++) {
      merged.push(arr1[i]);
    }
  } else {
    for (let i = p2; i < arr2.length; i++) {
      merged.push(arr2[i]);
    }
  }

  return merged;
};

const mergeSort = (arr) => {
  // base case: 1 element
  if (arr.length === 1) return arr;

  // recursive case: more than 1 element
  let middleIndex = Math.floor(arr.length - 1);
  // slicing: O(n) operation
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  // merge step: O(n) operation
  return mergeArrays(mergeSort(left), mergeSort(right));
}
