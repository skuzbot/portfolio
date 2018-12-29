/*
Output:
  numerical representations of roman numeral input

Input:
string
Constrains/Conditions:

Examples/Edge Cases:

*/
var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
// -Start of Code-                                                 ===
translateRomanNumeral = (rn, o = []) => {
  for (let i = 0; i < rn.length; i++) {
    if (DIGIT_VALUES[rn[i]] === undefined) {
      return 'null';
    }
    if (DIGIT_VALUES[rn[i]] < DIGIT_VALUES[rn[i + 1]]) {
      o = o.concat([-1 * DIGIT_VALUES[rn[i]], DIGIT_VALUES[rn[i + 1]]]);
      i++;
    } else {
      o.push(DIGIT_VALUES[rn[i]]);
    }
  }
  return o.length ? o.reduce((a, c) => a + c) : 0;
};
// -End of Code-                                                   ===

// given tests:

// const input = 'LX'; //60 -> 50 + 10
// const input = 'MCMXC'; //1990 -> 1000 + (-1 * 100) + 1000 + (-1 * 10) + 100
const input = 'LX'; // null

console.log(translateRomanNumeral(input));