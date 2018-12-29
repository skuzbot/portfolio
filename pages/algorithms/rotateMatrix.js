/*
Output:

Input:

Constrains/Conditions:

Examples/Edge Cases:

*/
// -Start of Code-                                                 ===
rotateMatrix = (matrix) => {
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    output.push(i);
  }
  output = output.map(index => (
    matrix.map(row => row[index])
  ));

  console.log('output :', output);
  output.forEach(row => {
    row.reverse();
  });

  return output;
};
// -End of Code-                                                   ===

// given tests:

const input = [
  [1, 2],
  [3, 4]
];

/* output:
[
  [3, 1],
  [4, 2]
]
*/

const input2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

/* output:
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
]

[
  ['*', 1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, '*']
]
*/

console.log(rotateMatrix(input));
console.log(rotateMatrix(input2));