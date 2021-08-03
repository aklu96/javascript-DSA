/*

Variants:
- undirected
- heap solution

Time complexity: O((V + E)*log(V))
Space complexity: guessing O(V)

Input format: n representing number of nodes 0 to n - 1, starting node, edge list
Output: shortest path to each node

step 1: convert edge list to adjacency set

*/

const Heap = require('../../../javascript-data-structures/binaryHeap.js');

// O(V + E) operation to make this graph given the input
class Graph {
  constructor(n, edges) {
    // add nodes to hash map
    this.nodes = {};
    for (let i = 0; i < n; i++) {
      // each node will map to another hashmap
      // the inner hashmap contains each of the node's neighbors
      // and the corresponding weights
      this.nodes[i] = {};
    }

    // fill out adjacency set
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      this.addEdge(edge[0], edge[1], edge[2]);
    }
  }

  // directed
  addEdge(i, j, weight) {
    this.nodes[i][j] = weight;
  }

  /*
  // undirected
  addEdge(i, j, weight) {
    this.nodes[i][j] = weight;
    this.nodes[j][i] = weight;
  }
  */
}

const graph = new Graph(4, [[0, 1, 24], [0, 2, 3], [0, 3, 20], [2, 3, 12]]);
console.log(graph);

const shortestPaths = (n, s, edges) => {
  // structure our graph as an adjacency set [O(V + E) operation, worst case O(n^2)]
  const graph = new Graph(n, edges);

  // Dijkstra's algorithm
  // keep track of distances for all nodes in a hashmap
  // structure: [node]: distance
  const distances = {
    [s]: 0
  };
  // keep track of visited nodes
  const visited = {};

  // heap comparator function
  // store in heap as object with value and distance props
  const compareDistances = (node1, node2) => {
    return node2 !== undefined && node1.dist < node2.dist;
  }

  // init heap
  const minHeap = new Heap(compareDistances);

  // put starting node into heap
  minHeap.insert({
    value: s,
    dist: 0
  });

  // loop through heap
  while (minHeap._heap.length) {
    const node = minHeap.removeRoot();
    // check if node has been visited
    // (deal with updating nodes by simply pushing duplicates to heap and ignoring
    //  duplicates as shortest path will always come first from the heap)
    if (visited[node.value]) continue;

    // mark node as visited
    visited[node.value] = true;

    // iterate through neighbors
    const neighbors = graph.nodes[node.value];
    for (let neighbor in neighbors) {
      if (visited[neighbor]) continue;
      // if neighbor hasn't been visited and
      // if new distance is shorter than current distance
      const weight = neighbors[neighbor];
      const newDist = node.dist + weight;
      if (distances[neighbor] === undefined || newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        minHeap.insert({
          value: neighbor,
          dist: newDist
        });
      }
      // insert into heap
    }
  }

  return distances;
};

console.log(shortestPaths(4, 0, [[0, 1, 24], [0, 2, 3], [0, 3, 20], [2, 3, 12]]));
