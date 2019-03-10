import { Component } from 'react';
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default class IterativeFib extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberInput: '',
      numberOutput: 0,
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
    e.preventDefault();
    if (e.target.value === '0' || e.target.value === 0 || e.target.value === NaN) {
      this.setState({
        numberInput: '',
        numberOutput: 0,
      })
    }
    let n = e.target.value;
    if (n === NaN || n === '') {
      n = '';
    }
    if (typeof n === 'string') {
      n = parseInt(n);
    }
    let fib = this.iterativeFib(n);
    this.setState({
      numberInput: n,
      numberOutput: fib,
    })
  }

  handleButtonClick(e) {
    e.preventDefault();
    let prevNumber = this.state.numberInput || 0;
    if (e.target.name === 'increase') {
      prevNumber += 1;
      let fib = this.iterativeFib(prevNumber);
      this.setState({
        numberInput: prevNumber,
        numberOutput: fib
      })
    } else {
      if (prevNumber > 0) {
        prevNumber -= 1 || 0;
        let fib = this.iterativeFib(prevNumber);
        this.setState({
          numberInput: prevNumber,
          numberOutput: fib
        })
      }
    }
  }

  handleZeroFocus(e) {
    if (e.target.value === '0' || e.target.value === 0) {
      this.setState({
        numberInput: '',
        numberOutput: 0,
      })
    }
  }

  render() {
    return <div className="container">
        <Meta />
        <div className="content">
          <Navbar />
          <div className="fibonacci">
            Input any number:
            <span className="note">
              {' '}
              (Numbers over 1476 return <big>∞</big> & negative numbers are disabled){' '}
            </span>
            <div className="input-container">
              <input 
                min="0" 
                type="number" 
                value={this.state.numberInput} 
                onChange={e => this.handleNumberInput(e)} 
                onFocus={(e) => this.handleZeroFocus(e)}
                />
              <div>
                <button name="increase" onClick={e => this.handleButtonClick(e)}>
                  ▲
                </button>
                <button name="decrease" onClick={e => this.handleButtonClick(e)}>
                  ▼
                </button>
              </div>
            </div>
            <div className='display'>Nth Fibonacci: {this.state.numberOutput}</div>
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .fibonacci {
            margin-top: 20px;
            width: 100vw;
            display: flex;
            font-size: 2em;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          .input-container {
            margin: 10px;
            display: flex;
            flex-direction: row;
          }

          input {
            height: 80px;
            width: 180px;
            text-align: right;
            font-size: 1.5em;
            display: inline;
            border: 1px black solid;
            font-family: 'Fira Mono', monospace;
          }

          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            margin: 0;
            -webkit-appearance: none;
          }

          button {
            height: 50%;
            border: none;
            display: block;
            border: 1px solid black;
          }

          .display {
            margin: 10px;
          }

          .note {
            font-size: 0.5em;
          }`}</style>
      </div>;
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