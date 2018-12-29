/*
Output:
  fib at nth position

Input:
  number

Constrains/Conditions:
  do not use recursion

Examples/Edge Cases:


*/
//helper function

// -Start of Code-                                                 ===
iterativeFib = n => {
  let [a, b] = [0, 1];
  while (n >= 0) {
    [a, b] = [a + b, a];
    n--;
  }
  return b;
};
// -End of Code-                                                   ===

// given tests:

const input = 15;

console.log(iterativeFib(input));