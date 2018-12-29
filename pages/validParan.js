import { Component } from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default class ValidParan extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          Parenthasis Validator
        <Footer/>
      </div>
    )
  }
}

// /*
// Output:

// Input:

// Constrains/Conditions:

// determine if balance of parenthasis are valid

// Examples/Edge Cases:

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// */
// // -Start of Code-                                                 ===

// validParentheses = par => {
//   if (par[0] === ')' || par.length % 2 !== 0) {
//     return false;
//   }
//   par.replace(/\w|\d/, '');

//   while (par.length > 2) {
//     par = par.split('()').join('');
//   }
//   if (par === '()' || par.length === 0) {
//     return true;
//   }
//   return false;
// };


// // -End of Code-                                                   ===

// // given tests:

// const input = '(())((()())())';


// console.log(validParentheses(input));
