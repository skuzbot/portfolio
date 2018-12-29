/*
Output:

Input:

Constrains/Conditions:

determine if balance of parenthasis are valid

Examples/Edge Cases:

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/
// -Start of Code-                                                 ===

validParentheses = par => {
  if (par[0] === ')' || par.length % 2 !== 0) {
    return false;
  }
  par.replace(/\w|\d/, '');

  while (par.length > 2) {
    par = par.split('()').join('');
  }
  if (par === '()' || par.length === 0) {
    return true;
  }
  return false;
};


// -End of Code-                                                   ===

// given tests:

const input = '(())((()())())';


console.log(validParentheses(input));
