import { Component } from 'react';
import Meta from '../components/Meta'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default class IterativeFib extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberInput: null,
      numberOutput: null,
    }
  }

  iterativeFib (n) {
    let [a, b] = [0, 1];
    while (n >= 0) {
      [a, b] = [a + b, a];
      n--;
    }
    return b;
  };

  handleNumberInput(e) {
    let n = e.target.value;
    let fib = this.iterativeFib(n);
    this.setState({
      numberInput: n,
      numberOutput: fib,
    })
  }

  render() {
    return(
      <div className='container'>
        <Meta/>
        <Navbar/>
          Nth Fibonacci
          <div className='fibonacci'>
            Input any number:
            <span className='note'> (Numbers over 1467 return <big>∞</big>) </span>
            <input 
              type='number'
              value={this.state.numberInput}
              onChange={(e  ) => this.handleNumberInput(e)}
            />
            {/* <div>Input: {this.state.numberInput}</div> */}
            <div>Nth Fibonacci: {this.state.numberOutput}</div>
          </div>
        <Footer/>
        <style jsx>{`
          .fibonacci {
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 2em;
          }

          input {
            font-family: 'Fira Mono', monospace;
            border: 1px black solid;
            height: 80px;
            width: 180px;
            font-size: 1.5em;
            direction: RTL;
          }

          .note {
            font-size: .4em;
          }
         
        `}</style>
      </div>
    )
  }
}

// /*
// Output:
//   fib at nth position

// Input:
//   number

// Constrains/Conditions:
//   do not use recursion

// Examples/Edge Cases:


// */
// //helper function

// // -Start of Code-                                                 ===
// iterativeFib = n => {
//   let [a, b] = [0, 1];
//   while (n >= 0) {
//     [a, b] = [a + b, a];
//     n--;
//   }
//   return b;
// };
// // -End of Code-                                                   ===

// // given tests:

// const input = 15;

// console.log(iterativeFib(input));